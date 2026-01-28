/**
 * ARTICLES CONFIGURATION
 * 
 * Centralized configuration for all blog articles.
 * To add a new article:
 * 1. Create the .md file in blog/articles/
 * 2. Add entry here with all metadata
 * 3. That's it! The system handles the rest.
 */

const ARTICLES_CONFIG = [
    {
        id: 'cleancode-4-ds-part1',
        title: 'CleanCode-4-DS: Part I - Why Clean Code Matters for Data Scientists',
        date: 'January 27, 2025',
        tag: 'Best Practices',
        excerpt: 'As a Data Scientist, you might think "my code just needs to work". But production ML systems demand more. Learn why Clean Code principles are essential for DS.',
        image: null,
        markdownFile: 'blog/articles/cleancode-4-ds-part1.md'
    },
    {
        id: 'rag-vs-finetuning',
        title: 'RAG vs Fine-tuning: When to Use Each Approach',
        date: 'January 25, 2025',
        tag: 'LLMs',
        excerpt: 'A deep dive into choosing between Retrieval-Augmented Generation and fine-tuning for your LLM applications, with real-world examples and decision frameworks.',
        image: null,
        markdownFile: 'blog/articles/rag-vs-finetuning.md'
    },
    {
        id: 'mlops-real-world',
        title: 'MLOps in Practice: Lessons from Real Projects',
        date: 'January 20, 2025',
        tag: 'MLOps',
        excerpt: 'Practical insights from deploying ML models in production at Intel, SAUTER, and other companies. What works, what doesn\'t, and why.',
        image: null,
        markdownFile: 'blog/articles/mlops-real-world.md'
    },
    {
        id: 'anomaly-detection-timeseries',
        title: 'Anomaly Detection in Time Series: A Practical Guide',
        date: 'January 15, 2025',
        tag: 'ML',
        excerpt: 'How we achieved 80%+ detection rate in petroleum well monitoring using ensemble methods. Techniques, challenges, and solutions.',
        image: null,
        markdownFile: 'blog/articles/anomaly-detection-timeseries.md'
    }
];

/**
 * Get article configuration by ID
 * @param {string} id - Article ID
 * @returns {Object|null} Article configuration or null if not found
 */
function getArticleById(id) {
    return ARTICLES_CONFIG.find(article => article.id === id) || null;
}

/**
 * Get all articles
 * @returns {Array} All article configurations
 */
function getAllArticles() {
    return ARTICLES_CONFIG;
}

/**
 * Get articles by tag
 * @param {string} tag - Tag to filter by
 * @returns {Array} Filtered articles
 */
function getArticlesByTag(tag) {
    return ARTICLES_CONFIG.filter(article => article.tag === tag);
}