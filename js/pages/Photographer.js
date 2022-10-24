class Photographer {
    constructor() {
        //this.$wrapper = document.createElement('section');
        this.$wrapper = document.querySelector('.main');
        this.api = new PhotographerApi();

        this.photographer = '';
        this.media = [];

        // Get Id from URL
        const params = (new URL(document.location)).searchParams;
        this.id = parseInt(params.get('id'));
    }

    async getData() {
        const { photographers, media } = await this.api.getData();

        // Create the Photographer
        const photographerData = photographers.filter( user => user.id === this.id )[0];
        this.photographer = new PhotographerFactory(photographerData);

        // Create an array of Media
        const mediaData = media.filter( media => media.photographerId === this.id );
        for (const data of mediaData) {
            this.media.push(new MediaFactory(data));
        }

    }

    createHeader() {
        this.$wrapper.appendChild(this.photographer.createHeader());
    }

    async main() {

        await this.getData();

        this.createHeader();

    }
}

const page = new Photographer();
page.main();