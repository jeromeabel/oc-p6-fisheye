class Home {
    constructor() {
        this.$wrapper = document.querySelector('.home');
        this.dataURL ='/data/photographers.json';
    }

    async main() {
        // Get data from .json
        const { photographers } = await FetchApi.get(this.dataURL);

        // Display : add cards to DOM
        for (const photographer of photographers) {
            const template = new PhotographerCard(photographer);
            this.$wrapper.appendChild(template.createCard())
        }
    }  
}

const home = new Home()
home.main()
