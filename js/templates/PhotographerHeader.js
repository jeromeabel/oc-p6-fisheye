class PhotographerHeader {

    constructor(photographer) {
        // DOM
        this.$wrapper = document.createElement('div');
        this.class = 'photographer-header';

        // Data
        this.photographer = photographer;
    }

    create() {
        const html = 
            `
                <div class="${this.class}__text">
                    <h1>${this.photographer.name}</h1>
                    <p>${this.photographer.location}</p>
                    <p>${this.photographer.tagline}</p>
                </div>
                <button class="btn" data-open="contact" aria-label="Contactez-moi">Contactez-moi</button>
                <img class="${this.class}__portrait img-rounded" src="${this.photographer.portraitURL}" alt="Portrait de ${this.photographer.name}">
            `;
        this.$wrapper.classList.add(this.class);
        this.$wrapper.innerHTML = html;
        return this.$wrapper;
    }
}