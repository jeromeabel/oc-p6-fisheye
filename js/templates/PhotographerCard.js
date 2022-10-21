class PhotographerCard {

    constructor(data) {
        this.data = data;
        this.$wrapper = document.createElement('article');
        this.$wrapper.classList.add('card');
    }

    createCard() {
        const card = `
                <div class="card__header">
                    <a href="photographer.html?id=${this.data.id}" arial-label="${this.data.name}">
                        <img class="img-rounded" alt="" src="assets/portraits/${this.data.portrait}">
                        <h2>${this.data.name}</h2>
                    </a>
                </div>
                <p class="card__body">
                    <span class="card__location">${this.data.city}, ${this.data.country}</span>
                    <span class="card__tagline">${this.data.tagline}</span>
                    <span class="card__price">${this.data.price}€/jour</span>
                </p>
        `

        this.$wrapper.innerHTML = card;
        return this.$wrapper;
    }

}
