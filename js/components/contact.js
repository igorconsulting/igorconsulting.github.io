/**
 * CONTACT COMPONENT
 * 
 * Renders the contact section
 */

class ContactComponent {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <section class="section" id="contact">
                <div class="container">
                    <h2 class="section-title fade-in">GET IN TOUCH</h2>
                    <p class="section-subtitle fade-in">Let's collaborate on innovative ML and AI projects</p>
                    
                    <div class="contact-grid">
                        ${this.data.contact.map(item => this.renderContactCard(item)).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderContactCard(item) {
        return `
            <a href="${item.link}" class="contact-card fade-in" ${item.link.startsWith('http') ? 'target="_blank"' : ''}>
                <div class="contact-icon">${item.icon}</div>
                <div class="contact-label">${item.label}</div>
                <div class="contact-value">${item.value}</div>
            </a>
        `;
    }
}

function renderContact() {
    const contact = new ContactComponent('contactSection', SITE_DATA);
    contact.render();
}