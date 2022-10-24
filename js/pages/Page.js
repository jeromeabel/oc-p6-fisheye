class Page {
    constructor() {
        this.$wrapper = document.querySelector('.page');
        this.photographerData = [];
        this.mediaData = [];

         // Get Id from URL
        const params = (new URL(document.location)).searchParams;
        this.id = parseInt(params.get('id'));
    }

    async getData() {
         const { photographers, media } = await PhotographerApi.get();
         this.photographerData = photographers.filter( user => user.id === this.id )[0];
         this.mediaData = media.filter( media => media.photographerId === this.id );
    }

    setTitle(){
        document.title = `${this.photographerData.name} - Fisheye`;
    }

    displayHeader(){
        const template = new PageHeader(this.photographerData);
        this.$wrapper.appendChild(template.createHeader())
    }

    displayMediaGallery() {

        // Parent DOM
        const $wrapperGallery = document.createElement('section');
        $wrapperGallery.classList.add("grid");
        $wrapperGallery.classList.add("page__gallery");
        $wrapperGallery.setAttribute("aria-label", "Gallerie de photos");

        for (const media of this.mediaData)  {
            let type = "image";
            if ( media.video ) type = "video";
            const template = new MediaCardFactory(media, type);
            $wrapperGallery.appendChild(template.createCard());
            template.setLikeListeners();
        }
        
        this.$wrapper.appendChild($wrapperGallery);
    }

    setSlideShowListeners() {
        const $wrapperSlideShow = new SlideShowModal(this.mediaData);
        
        // Close modale : Key Escaoe
        document.addEventListener("keydown", (e) => {
            if( $wrapperSlideShow.isOpened) {
                if (e.key === 'Escape' ) $wrapperSlideShow.close();
                else if (e.key === "ArrowLeft") $wrapperSlideShow.prev();
                else if (e.key === "ArrowRight") $wrapperSlideShow.next();
            }
        })
        
        // Open Modal : mouse click + Key Enter
        const cards = document.querySelectorAll('.card-media');
        for (const card of cards) {
            const id = card.getAttribute('data-id');
            // click
            const eltMedia = card.querySelector('.card-media__media');
            eltMedia.addEventListener('click', () => $wrapperSlideShow.open(id));
            card.addEventListener("keydown", (e) => {
                if (e.key === "Enter") { 
                    $wrapperSlideShow.open(id); 
                }
            });
        }
    }

    setContactFormListeners() {
        const $wrapperForm = new ContactModal(this.photographerData.name);
    }
    
    async main() {
        await this.getData();

        this.setTitle();

        this.displayHeader();

        this.displayMediaGallery();

        this.setSlideShowListeners();

        this.setContactFormListeners();
    }  
}

const page = new Page()
page.main()