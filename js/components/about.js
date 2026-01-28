/**
 * ABOUT COMPONENT
 * 
 * Renders the About Me section
 */

class AboutComponent {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <section class="section" id="about">
                <div class="container">
                    <h2 class="section-title fade-in">ABOUT ME</h2>
                    <p class="section-subtitle fade-in">Building the future of AI, one model at a time</p>
                    
                    <div class="about-content">
                        ${this.renderHighlights()}
                        ${this.renderAchievements()}
                    </div>
                </div>
            </section>
        `;
    }

    renderHighlights() {
        return `
            <div class="highlights-grid">
                ${this.data.about.highlights.map(item => `
                    <div class="highlight-card fade-in">
                        <div class="highlight-icon">${item.icon}</div>
                        <h3 class="highlight-title">${item.title}</h3>
                        <p class="highlight-description">${item.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderAchievements() {
        return `
            <div class="achievements-section fade-in">
                <h3 class="achievements-title">Key Achievements</h3>
                <ul class="achievements-list">
                    ${this.data.about.achievements.map(achievement => `
                        <li>${achievement}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
}

function renderAbout() {
    const about = new AboutComponent('aboutSection', SITE_DATA);
    about.render();
}