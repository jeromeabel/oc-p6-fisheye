class Home {
    constructor() {
        this.$wrapper = document.querySelector('.home');
    }

    async main() {
        // Get data from .json
        const { photographers } = await PhotographerApi.get();

        // Display : add cards to DOM
        for (const photographer of photographers) {
            const template = new PhotographerCard(photographer);
            this.$wrapper.appendChild(template.createCard())
        }
    }  
}

const home = new Home()
home.main()
