class Index {
    constructor() {
        // DOM
        this.$parentWrapper = document.querySelector('.main');
        this.$wrapper = document.createElement('section');

        // Data
        this.photographers = [];
    }

    async setData() {
        const { photographers } = await PhotographerApi.getData();
        this.photographers = photographers.map( data => new Photographer(data) );
    }

    createPortraits() {
        this.$wrapper.classList.add('grid');

        this.photographers.forEach(photographer => {
            const template =  new PhotographerCard(photographer);
            this.$wrapper.appendChild(template.create());
        })

        this.$parentWrapper.appendChild(this.$wrapper);
    }

    async main() {
        
        await this.setData()

        this.createPortraits();
    }
}

const index = new Index();
index.main();