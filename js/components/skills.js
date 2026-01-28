/**
 * SKILLS COMPONENT
 * 
 * Renders the technical skills section
 */

class SkillsComponent {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <section class="section" id="skills">
                <div class="container">
                    <h2 class="section-title fade-in">TECHNICAL SKILLS</h2>
                    <p class="section-subtitle fade-in">Comprehensive ML & AI expertise</p>
                    
                    <div class="skills-container">
                        ${this.data.skills.map(skillSet => this.renderSkillCategory(skillSet)).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderSkillCategory(skillSet) {
        return `
            <div class="skill-category fade-in">
                <h3>${skillSet.category}</h3>
                <div class="skill-tags">
                    ${skillSet.tags.map(tag => `
                        <span class="skill-tag">${tag}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

function renderSkills() {
    const skills = new SkillsComponent('skillsSection', SITE_DATA);
    skills.render();
}