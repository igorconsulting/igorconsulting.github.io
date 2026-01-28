/**
 * HERO COMPONENT
 * 
 * Renders the hero/landing section of the homepage
 */

class HeroComponent {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-label">${this.data.personal.title}</div>
                        <h1 class="hero-title">
                            ${this.formatName(this.data.personal.name)}
                        </h1>
                        <p class="hero-subtitle">${this.data.personal.subtitle}</p>
                        <p class="hero-description">${this.data.about.summary}</p>
                        <div class="cta-buttons">
                            <a href="#contact" class="btn btn-primary">
                                <span>Get In Touch</span>
                            </a>
                            <a href="blog.html" class="btn btn-secondary">Read Blog</a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    formatName(name) {
        const parts = name.split(' ');
        const firstName = parts.slice(0, 2).join(' ');
        const lastName = parts.slice(2).join(' ');
        return `${firstName}<br>${lastName}`;
    }
}

function renderHero() {
    const hero = new HeroComponent('heroSection', SITE_DATA);
    hero.render();
}