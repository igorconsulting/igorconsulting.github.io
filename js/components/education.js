/**
 * EDUCATION COMPONENT
 * 
 * Renders the education timeline section
 */

class EducationComponent {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <section class="section" id="education" style="background: var(--dark);">
                <div class="container">
                    <h2 class="section-title fade-in">EDUCATION</h2>
                    <p class="section-subtitle fade-in">Solid academic foundation in mathematics and AI</p>
                    
                    <div class="education-timeline">
                        ${this.data.education.map(edu => this.renderEducationItem(edu)).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderEducationItem(edu) {
        return `
            <div class="education-item fade-in">
                <h3 class="education-degree">${edu.degree}</h3>
                <p class="education-school">${edu.school}</p>
                <p class="education-date">${edu.period}</p>
                <p class="education-details">${edu.details}</p>
            </div>
        `;
    }
}

function renderEducation() {
    const education = new EducationComponent('educationSection', SITE_DATA);
    education.render();
}