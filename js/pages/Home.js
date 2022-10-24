class Home {
    constructor() {
        this.$wrapper = document.createElement('section');
        this.$parent = document.querySelector('.main');
        this.api = new PhotographerApi();
        this.photographers = [];
    }

    async getData() {
        const { photographers } = await this.api.getData();
        for (const photographer of photographers) {
            this.photographers.push(new PhotographerFactory(photographer, []));
        }
    }

    displayPortraits() {
        this.$wrapper.classList.add('grid');
        for (const photographer of this.photographers) {
            this.$wrapper.appendChild(photographer.createPortrait());
        }
        this.$parent.appendChild(this.$wrapper);
    }

    async main() {
        await this.getData()
        this.displayPortraits();
    }
}

const home = new Home();
home.main();