class PhotographerHeader {

    constructor(data) {
        this.data = data;
        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('intro');
    }

    create() {
        const html = `
                <div class="intro__text">
                    <h1>${this.data.name}</h1>
                    <p>${this.data.city}, ${this.data.country}</p>
                    <p>${this.data.tagline}</p>
                </div>
                <button class="btn-contact contact__open" aria-label="Contactez-moi">Contactez-moi</button>
                <img class="intro__portrait img-rounded" src="assets/portraits/${this.data.portrait}" alt="Portrait de ${this.data.name}">
            `

        this.$wrapper.innerHTML = html;
        return this.$wrapper;
    }
}