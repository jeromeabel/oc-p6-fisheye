class Photographer {
    constructor() {
        this.$wrapper = document.querySelector('.main');
        
        // Fetch API
        this.api = new PhotographerApi();

        // Get Id from URL
        const params = (new URL(document.location)).searchParams;
        this.id = parseInt(params.get('id'));

        // Modal
        this.lightbox = new ModalFactory('lightbox');
        this.contact = new ModalFactory('contact');

        // Handle Open/Close states
        const stateElements = [ this.$wrapper, this.contact, this.lightbox];
        this.state = new State(stateElements);
    }

    async getData() {
        const { photographers, media } = await this.api.getData();
        const photographerData = photographers.filter( user => user.id === this.id )[0];
        const mediaData = media.filter( media => media.photographerId === this.id );

        // Create the Photographer
        this.photographer = new PhotographerFactory(photographerData, mediaData);
    }

    setTitle() {
        document.title = `${this.photographer.name} - Fisheye`;
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

    setListeners() {

        // Open Contact Modal
        this.photographer.
        getContactElement().
        addEventListener('click', (e) => {
            this.state.update(1);
        });
        
        // Open Lightbox Modal
        const mediaElements = this.photographer.getMediaElements();
        mediaElements.forEach( (elt) => {
            elt.addEventListener('click', (e) => {
                this.lightbox.setMediaElement(elt);
                this.state.update(2);
            });
        })

        // Close Lightbox Modal
        this.lightbox.getCloseElement()
        .addEventListener('click', (e) => this.state.update(0));
    }

    createModals(){
       // this.lightbox.create();
        this.contact.create();
    }

    async main() {
        await this.getData();

        this.setTitle();

        this.createHeader();

        this.createFilter();

        this.createGallery();

        this.createLikes();

        this.createModals();

        this.setListeners();
    }
}

const page = new Photographer();
page.main();