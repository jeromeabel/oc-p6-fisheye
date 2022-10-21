class PageHeader {

    constructor(data) {
        this.data = data;
        this.$wrapper = document.createElement('section');
        this.$wrapper.classList.add('page__header');
    }

    createHeader() {
        const header = `
                <div class="page__heading">
                    <h1>${this.data.name}</h1>
                    <p>${this.data.city}, ${this.data.country}</p>
                    <p>${this.data.tagline}</p>
                </div>
                <button class="btn-contact">Contactez-moi</button>
                <img class="page__portrait img-rounded" src="assets/portraits/${this.data.portrait}" alt="">
            `

        this.$wrapper.innerHTML = header;
        return this.$wrapper;
    }
}