/* AUTO-GENERATED FILE. DO NOT EDIT BY HAND. */
const ARTICLES_CONFIG = [
  {
    "id": "clean-code__cleancode-4-ds-part1",
    "title": "CleanCode-4-DS: Part I - Why Clean Code Matters for Data Scientists",
    "date": "",
    "tag": "clean-code",
    "excerpt": "As a Data Scientist or Machine Learning Engineer, you've probably heard colleagues say: *\"My code just needs to work\"* or *\"I'll clean it up later\"*. Sound familiar? I've been the…",
    "markdownFile": "blog/articles/clean-code/cleancode-4-ds-part1.md",
    "image": null,
    "order": 9999
  },
  {
    "id": "domain-driven-design__01-introduction",
    "title": "01. Introduction to Domain-Driven Desing",
    "date": "",
    "tag": "domain-driven-design",
    "excerpt": "In software development, there are no answers. Only Choices.",
    "markdownFile": "blog/articles/domain-driven-design/01-introduction.md",
    "image": null,
    "order": 1
  },
  {
    "id": "domain-driven-design__02-ubiquituous-language",
    "title": "02. Ubiquituous Languange and Bounded Context",
    "date": "",
    "tag": "domain-driven-design",
    "excerpt": "Ubiquituous: being everywhere",
    "markdownFile": "blog/articles/domain-driven-design/02-ubiquituous-language.md",
    "image": null,
    "order": 2
  },
  {
    "id": "domain-driven-design__03-bounded-context",
    "title": "03-bounded-context",
    "date": "",
    "tag": "domain-driven-design",
    "excerpt": "## 03. Bounded Context",
    "markdownFile": "blog/articles/domain-driven-design/03-bounded-context.md",
    "image": null,
    "order": 3
  },
  {
    "id": "domain-driven-design__04-value-objects",
    "title": "04. Value Objects",
    "date": "",
    "tag": "domain-driven-design",
    "excerpt": "The Simplest pattern in tactical domain designer. They are used to **measure** and **objects** things in the domain.",
    "markdownFile": "blog/articles/domain-driven-design/04-value-objects.md",
    "image": null,
    "order": 4
  },
  {
    "id": "domain-driven-design__05-entity-objects",
    "title": "05. Entity Objects",
    "date": "",
    "tag": "domain-driven-design",
    "excerpt": "It's a next level of sofistication.",
    "markdownFile": "blog/articles/domain-driven-design/05-entity-objects.md",
    "image": null,
    "order": 5
  },
  {
    "id": "domain-driven-design__06-aggregates",
    "title": "06. Aggregates",
    "date": "",
    "tag": "domain-driven-design",
    "excerpt": "",
    "markdownFile": "blog/articles/domain-driven-design/06-aggregates.md",
    "image": null,
    "order": 6
  },
  {
    "id": "rag__example-article-rag",
    "title": "RAG vs Fine-tuning: When to Use Each Approach",
    "date": "",
    "tag": "rag",
    "excerpt": "When working with Large Language Models (LLMs), two powerful techniques stand out for customizing model behavior: **Retrieval-Augmented Generation (RAG)** and **Fine-tuning**. But…",
    "markdownFile": "blog/articles/rag/example-article-rag.md",
    "image": null,
    "order": 9999
  }
];

function getAllArticles() {
  return ARTICLES_CONFIG;
}

function getArticleById(id) {
  return ARTICLES_CONFIG.find(a => a.id === id) || null;
}

function getArticlesByTag(tag) {
  return ARTICLES_CONFIG.filter(a => a.tag === tag);
}
