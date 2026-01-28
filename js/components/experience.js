/**
 * EXPERIENCE COMPONENT
 * 
 * Renders the professional experience section
 */

class ExperienceComponent {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <section class="section" id="experience">
                <div class="container">
                    <h2 class="section-title fade-in">EXPERIENCE</h2>
                    <p class="section-subtitle fade-in">Building AI solutions that make a difference</p>
                    
                    <div class="experience-grid">
                        ${this.data.experience.map(exp => this.renderExperienceCard(exp)).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderExperienceCard(exp) {
        return `
            <div class="experience-card fade-in">
                <div class="experience-header">
                    <div>
                        <h3 class="experience-title">${exp.title}</h3>
                        <p class="experience-company">${exp.company}</p>
                    </div>
                    <div class="experience-date">${exp.period}</div>
                </div>
                <div class="experience-description">
                    <ul>
                        ${exp.description.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
}

function renderExperience() {
    const experience = new ExperienceComponent('experienceSection', SITE_DATA);
    experience.render();
}