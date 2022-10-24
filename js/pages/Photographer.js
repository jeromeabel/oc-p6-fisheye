class Photographer {
    constructor() {
        this.$wrapper = document.querySelector('.main');
        this.api = new PhotographerApi();

        // Get Id from URL
        const params = (new URL(document.location)).searchParams;
        this.id = parseInt(params.get('id'));
    }

    async getData() {
        const { photographers, media } = await this.api.getData();
        const photographerData = photographers.filter( user => user.id === this.id )[0];
        const mediaData = media.filter( media => media.photographerId === this.id );

        // Create the Photographer
        this.photographer = new PhotographerFactory(photographerData, mediaData);
    }

    createHeader() {
        this.$wrapper.appendChild(this.photographer.createHeader());
    }

    createFilter() {

    }

    createGallery() {
        this.$wrapper.appendChild(this.photographer.createGallery());
    }

    createLikes() {

    }

    async main() {
        await this.getData();

        this.createHeader();

        this.createFilter();

        this.createGallery();

        this.createLikes();
    }
}

const page = new Photographer();
page.main();