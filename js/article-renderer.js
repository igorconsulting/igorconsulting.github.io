/**
 * ARTICLE RENDERER
 * 
 * Responsible for:
 * 1. Loading markdown files
 * 2. Converting markdown to HTML
 * 3. Rendering article pages
 * 
 * Single Responsibility: Handle article page rendering
 */

class ArticleRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.configureMarkdown();
    }

    /**
     * Configure markdown parser settings
     */
    configureMarkdown() {
        if (typeof marked !== 'undefined') {
            marked.setOptions({
                highlight: function(code, lang) {
                    if (lang && typeof hljs !== 'undefined' && hljs.getLanguage(lang)) {
                        return hljs.highlight(code, { language: lang }).value;
                    }
                    return typeof hljs !== 'undefined' 
                        ? hljs.highlightAuto(code).value 
                        : code;
                },
                breaks: true,
                gfm: true
            });
        }
    }

    /**
     * Load and render article by ID
     * @param {string} articleId - Article identifier
     */
    async loadArticle(articleId) {
        if (!this.container) {
            console.error('Container not found');
            return;
        }

        const article = getArticleById(articleId);

        if (!article) {
            this.renderNotFound();
            return;
        }

        try {
            this.renderLoading();
            const markdown = await this.fetchMarkdown(article.markdownFile);
            const html = this.convertMarkdownToHtml(markdown);
            this.renderArticle(article, html);
            this.updatePageTitle(article.title);
        } catch (error) {
            console.error('Error loading article:', error);
            this.renderError(error.message);
        }
    }

    /**
     * Fetch markdown file from server
     * @param {string} filePath - Path to markdown file
     * @returns {Promise<string>} Markdown content
     */
    async fetchMarkdown(filePath) {
        const response = await fetch(filePath);
        
        if (!response.ok) {
            throw new Error(`Failed to load article: ${response.statusText}`);
        }

        return await response.text();
    }

    /**
     * Convert markdown to HTML
     * @param {string} markdown - Markdown content
     * @returns {string} HTML content
     */
    convertMarkdownToHtml(markdown) {
        if (typeof marked === 'undefined') {
            throw new Error('Marked.js not loaded');
        }
        return marked.parse(markdown);
    }

    /**
     * Render complete article
     * @param {Object} article - Article metadata
     * @param {string} htmlContent - Rendered HTML content
     */
    renderArticle(article, htmlContent) {
        this.container.innerHTML = `
            <article class="article-header">
                <div class="article-meta">
                    <span class="article-date">${article.date}</span>
                    <span class="article-tag">${article.tag}</span>
                </div>
                <h1 class="article-title">${article.title}</h1>
            </article>
            <div class="article-content">
                ${htmlContent}
            </div>
        `;
    }

    /**
     * Update page title
     * @param {string} title - Article title
     */
    updatePageTitle(title) {
        document.title = `${title} - Igor Caetano Diniz`;
    }

    /**
     * Render loading state
     */
    renderLoading() {
        this.container.innerHTML = `
            <div class="loading">
                Loading article...
            </div>
        `;
    }

    /**
     * Render not found state
     */
    renderNotFound() {
        this.container.innerHTML = `
            <div class="error">
                <h2>Article not found</h2>
                <p><a href="blog.html">Return to blog</a></p>
            </div>
        `;
    }

    /**
     * Render error state
     * @param {string} message - Error message
     */
    renderError(message) {
        this.container.innerHTML = `
            <div class="error">
                <h2>Failed to load article</h2>
                <p>${message}</p>
                <p>This could be because:</p>
                <ul style="text-align: left; max-width: 500px; margin: 2rem auto;">
                    <li>The markdown file doesn't exist yet</li>
                    <li>The file path is incorrect</li>
                    <li>There's a network error</li>
                </ul>
                <p><a href="blog.html">Return to blog</a></p>
            </div>
        `;
    }
}

/**
 * Get article ID from URL parameters
 * @returns {string|null} Article ID or null
 */
function getArticleIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

/**
 * Initialize article page
 */
function initArticle() {
    const articleId = getArticleIdFromUrl();
    const renderer = new ArticleRenderer('articleWrapper');
    
    if (!articleId) {
        renderer.renderError('No article ID provided');
        return;
    }

    renderer.loadArticle(articleId);
}