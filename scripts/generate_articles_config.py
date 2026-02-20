from __future__ import annotations

import json
import re
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Optional


ROOT = Path(__file__).resolve().parents[1]  # repo root
ARTICLES_DIR = ROOT / "blog" / "articles"
OUT_FILE = ROOT / "blog" / "config" / "articles-config.js"


TITLE_RE = re.compile(r"^\s*#\s+(?P<title>.+?)\s*$")
ORDER_PREFIX_RE = re.compile(r"^\s*(?P<num>\d{1,3})\s*[.\-:]?\s*(?P<rest>.*)$")


def slugify(s: str) -> str:
    s = s.strip().lower()
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"[\s_]+", "-", s)
    s = re.sub(r"-{2,}", "-", s)
    return s.strip("-")


def read_title(md_text: str, fallback: str) -> str:
    for line in md_text.splitlines():
        m = TITLE_RE.match(line)
        if m:
            return m.group("title").strip()
    return fallback


def read_excerpt(md_text: str, max_len: int = 180) -> str:
    # Take first non-empty paragraph after the title line.
    lines = md_text.splitlines()
    # remove leading empty lines
    i = 0
    while i < len(lines) and not lines[i].strip():
        i += 1
    # skip title if present
    if i < len(lines) and TITLE_RE.match(lines[i]):
        i += 1
    # collect until blank line
    para = []
    while i < len(lines):
        if not lines[i].strip():
            if para:
                break
            i += 1
            continue
        para.append(lines[i].strip())
        i += 1
    text = " ".join(para).strip()
    text = re.sub(r"\s+", " ", text)
    if len(text) > max_len:
        return text[: max_len - 1].rstrip() + "…"
    return text or ""


def parse_order(title: str, filename: str) -> int:
    # Prefer numeric prefix in title: "02. Something"
    m = ORDER_PREFIX_RE.match(title)
    if m and m.group("num"):
        return int(m.group("num"))
    # Fallback numeric prefix in filename: "02-something.md" or "02_something.md"
    m2 = re.match(r"^\s*(\d{1,3})", filename)
    if m2:
        return int(m2.group(1))
    return 9999


@dataclass(frozen=True)
class Article:
    id: str
    title: str
    date: str  # optional; keep empty if you don't want dates
    tag: str   # topic derived from folder
    excerpt: str
    markdownFile: str
    image: Optional[str] = None
    order: int = 9999


def main() -> None:
    if not ARTICLES_DIR.exists():
        raise SystemExit(f"Missing {ARTICLES_DIR}")

    articles: list[Article] = []

    for md_path in sorted(ARTICLES_DIR.rglob("*.md")):
        if md_path.name.startswith("_"):
            continue

        topic = md_path.parent.name  # folder name becomes topic/tag
        rel_md = md_path.relative_to(ROOT).as_posix()

        md_text = md_path.read_text(encoding="utf-8", errors="replace")
        title = read_title(md_text, fallback=md_path.stem)
        excerpt = read_excerpt(md_text)

        # Stable ID: topic + filename slug (not title, to avoid breaking links if title changes)
        base_slug = slugify(md_path.stem)
        article_id = f"{slugify(topic)}__{base_slug}"

        order = parse_order(title=title, filename=md_path.name)

        # If you truly don't want dates, keep empty string.
        # If you do, you can later switch to git log date in CI.
        date = ""

        articles.append(
            Article(
                id=article_id,
                title=title,
                date=date,
                tag=topic,
                excerpt=excerpt,
                markdownFile=rel_md,
                image=None,
                order=order,
            )
        )

    # Sort: by topic then by order then by title
    articles.sort(key=lambda a: (a.tag.lower(), a.order, a.title.lower()))

    # Output JS config exposing the functions your renderers expect
    payload = [asdict(a) for a in articles]

    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUT_FILE.write_text(
        "/* AUTO-GENERATED FILE. DO NOT EDIT BY HAND. */\n"
        f"const ARTICLES_CONFIG = {json.dumps(payload, ensure_ascii=False, indent=2)};\n\n"
        "function getAllArticles() {\n"
        "  return ARTICLES_CONFIG;\n"
        "}\n\n"
        "function getArticleById(id) {\n"
        "  return ARTICLES_CONFIG.find(a => a.id === id) || null;\n"
        "}\n\n"
        "function getArticlesByTag(tag) {\n"
        "  return ARTICLES_CONFIG.filter(a => a.tag === tag);\n"
        "}\n",
        encoding="utf-8",
    )

    print(f"Wrote {OUT_FILE} with {len(articles)} articles.")


if __name__ == "__main__":
    main()
