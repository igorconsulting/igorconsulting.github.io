/**
 * PROJECTS COMPONENT
 * 
 * Renders the key projects section
 */

class ProjectsComponent {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <section class="section" id="projects" style="background: var(--dark);">
                <div class="container">
                    <h2 class="section-title fade-in">KEY PROJECTS</h2>
                    <p class="section-subtitle fade-in">High-impact solutions across industries</p>
                    
                    <div class="projects-grid">
                        ${this.data.projects.map(project => this.renderProjectCard(project)).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderProjectCard(project) {
        return `
            <div class="project-card fade-in">
                <div class="project-number">${project.number}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-company">${project.company}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-metrics">
                    ${project.metrics.map(metric => `
                        <div class="metric">
                            <span class="metric-value">${metric.value}</span>
                            <span class="metric-label">${metric.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

function renderProjects() {
    const projects = new ProjectsComponent('projectsSection', SITE_DATA);
    projects.render();
}