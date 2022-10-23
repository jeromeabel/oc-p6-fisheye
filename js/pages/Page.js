class Page {
    constructor() {
        this.$wrapper = document.querySelector('.page');
        this.dataURL ='/data/photographers.json';
        this.photographerData = [];
        this.mediaData = [];

         // Get Id from URL
        const params = (new URL(document.location)).searchParams;
        this.id = parseInt(params.get('id'));
    }

    async getData() {
         const { photographers, media } = await FetchApi.get(this.dataURL);
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

        for (const media of this.mediaData)  {
            let type = "image";
            if ( media.video ) type = "video";
            const template = new MediaCardFactory(media, type);
            $wrapperGallery.appendChild(template.createCard());
        }
        
        this.$wrapper.appendChild($wrapperGallery);
    }

    setSlideShowListeners() {
        const $wrapperSlideShow = new SlideShowModal(this.mediaData);
        // Close modale : Key Escaoe
        document.addEventListener("keydown", (e) => {
            if( $wrapperSlideShow.isOpened && e.key === 'Escape'  ) {
                $wrapperSlideShow.close();
            }
        })
        
        // Open Modal : mouse click + Key Enter
        const cards = document.querySelectorAll('.card-media');
        for (const card of cards) {
            const id = card.getAttribute('data-id');
            card.addEventListener('click', (e) => $wrapperSlideShow.open(id))
            card.addEventListener("keydown", (e) => {
                if (e.key === "Enter") { $wrapperSlideShow.open(id); }
              });
        }
    }
    
    async main() {
        await this.getData();

        this.setTitle();

        this.displayHeader();

        this.displayMediaGallery();

        this.setSlideShowListeners();
    }  
}

const page = new Page()
page.main()