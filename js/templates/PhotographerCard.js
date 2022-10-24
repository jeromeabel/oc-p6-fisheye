class PhotographerCard {

    constructor(photographer) {
        this.$wrapper = document.createElement('article');
        this.$wrapper.classList.add('photographer-card');
        this.photographer = photographer;
    }

    create() {
        const html = `
                <div class="photographer-card__header">
                    <a href="photographer.html?id=${this.photographer.id}" arial-label="${this.photographer.name}">
                        <img class="img-rounded" alt="" src="assets/portraits/${this.photographer.portrait}">
                        <h2>${this.photographer.name}</h2>
                    </a>
                </div>
                <p class="photographer-card__body">
                    <span class="photographer-card__location">${this.photographer.city}, ${this.photographer.country}</span>
                    <span class="photographer-card__tagline">${this.photographer.tagline}</span>
                    <span class="photographer-card__price">${this.photographer.price}€/jour</span>
                </p>
        `

        this.$wrapper.innerHTML = html;
        return this.$wrapper;
    }

}
