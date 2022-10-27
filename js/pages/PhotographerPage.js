class PhotographerPage {
    constructor() {
        // DOM
        this.$title = document.title;
        this.$wrapper = document.querySelector('.main');

        // Get Id from the URL
        const params = (new URL(document.location)).searchParams;
        this.id = parseInt(params.get('id'));

        // Data
        this.photographer = null;
        this.media = [];
        this.interactions = [];

        // Manage open & close interactions
        this.openState = new OpenState();
    }

    async setData() {
        const { photographers, media } = await PhotographerApi.getData();

        // Create the Photographer from the Id
        const photographerData = photographers.filter(user => user.id === this.id)[0];
        this.photographer = new Photographer(photographerData);

        // Create the Media array from the Photographer
        const mediaData = media.filter(media => media.photographerId === this.photographer.id);
        this.media = mediaData.map((data) => new MediaFactory(data));
    }

    setTitle() {
        this.$title = `${this.photographer.name} - Fisheye`;
    }

    createHeader() {
        const headerTemplate = new PhotographerHeader(this.photographer);
        this.$wrapper.appendChild(headerTemplate.create());
    }

    createFilter() {

    }

    createGallery() {
        const $wrapperGallery = document.createElement('section');
        $wrapperGallery.classList.add('gallery');
        $wrapperGallery.classList.add('grid');

        this.media.forEach(media => {
            const template = new MediaCard(media);
            $wrapperGallery.appendChild(template.create());
        })

        this.$wrapper.appendChild($wrapperGallery);
    }

    createLikes() {

    }

    createModals() {
        const lightbox = new ModalLightbox(this.media);
        lightbox.create();
        lightbox.setListeners();

        const contact = new ModalContact(this.photographer.name);
        contact.create();
    }

    setListeners() {
        this.openState.setListeners();
    }

    async main() {
        await this.setData();

        this.setTitle();

        this.createHeader();

        this.createFilter();

        this.createGallery();

        this.createLikes();

        this.createModals();

        this.setListeners();
    }
}

const page = new PhotographerPage();
page.main();