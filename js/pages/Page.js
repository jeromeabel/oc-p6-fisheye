class Page {
    constructor() {
        this.$wrapper = document.querySelector('.page');
        this.dataURL ='/data/photographers.json';
        this.photographerData = [];
        this.mediaData = [];

        this.$modalGallery = new GalleryModal();

         // Get Id from URL
        const params = (new URL(document.location)).searchParams;
        this.id = parseInt(params.get('id'));
    }

    async getData() {
         const { photographers, media } = await FetchApi.get(this.dataURL);
         this.photographerData = photographers.filter( user => user.id === this.id )[0];
         this.mediaData = media.filter( media => media.photographerId === this.id );
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

    async main() {

        await this.getData();
       
        this.displayHeader();

        this.displayMediaGallery();

        this.$wrapper.appendChild(this.$modalGallery.create());

        const cards = document.querySelectorAll('.card-media');
        for (const c of cards) {
            c.addEventListener('click', (e) => {
                const id = c.getAttribute('data-index');
                this.$modalGallery.show(id);
                console.log('click');
            })
        }
    }  
}

const page = new Page()
page.main()