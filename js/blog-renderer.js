/**
 * BLOG RENDERER
 * 
 * Responsible for rendering the blog articles grid.
 * Single Responsibility: Transform article data into HTML.
 */

class BlogRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    /**
     * Render all articles to the grid
     * @param {Array} articles - Array of article objects
     */
    renderArticles(articles) {
        if (!this.container) {
            console.error('Container not found');
            return;
        }

        if (articles.length === 0) {
            this.renderEmpty();
            return;
        }

        this.container.innerHTML = articles
            .map(article => this.createArticleCard(article))
            .join('');
    }

    /**
     * Create HTML for a single article card
     * @param {Object} article - Article object
     * @returns {string} HTML string
     */
    createArticleCard(article) {
        return `
            <a href="article.html?id=${article.id}" class="article-card">
                ${this.createArticleImage(article)}
                <div class="article-content">
                    ${this.createArticleMeta(article)}
                    <h2 class="article-title">${article.title}</h2>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <span class="article-read-more">Read More</span>
                </div>
            </a>
        `;
    }

    /**
     * Create article image HTML
     * @param {Object} article - Article object
     * @returns {string} HTML string
     */
    createArticleImage(article) {
        if (article.image) {
            return `
                <div class="article-image">
                    <img src="${article.image}" alt="${article.title}">
                </div>
            `;
        }
        return `
            <div class="article-image">
                📊
            </div>
        `;
    }

    /**
     * Create article metadata HTML
     * @param {Object} article - Article object
     * @returns {string} HTML string
     */
    createArticleMeta(article) {
        return `
            <div class="article-meta">
                <span class="article-date">${article.date}</span>
                <span class="article-tag">${article.tag}</span>
            </div>
        `;
    }

    /**
     * Render empty state
     */
    renderEmpty() {
        this.container.innerHTML = `
            <div class="no-articles">
                No articles yet. Check back soon!
            </div>
        `;
    }

    /**
     * Render loading state
     */
    renderLoading() {
        this.container.innerHTML = `
            <div class="loading">
                Loading articles...
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
                ${message}
            </div>
        `;
    }
}

/**
 * Initialize blog page
 */
function initBlog() {
    const renderer = new BlogRenderer('articlesGrid');
    renderer.renderLoading();
    
    try {
        const articles = getAllArticles();
        renderer.renderArticles(articles);
    } catch (error) {
        console.error('Error loading articles:', error);
        renderer.renderError('Failed to load articles');
    }
}