class Page {
    constructor() {
        this.$wrapper = document.querySelector('.page');
        this.dataURL ='/data/photographers.json';
        //this.mediaFactory

         // Get Id from URL
        const params = (new URL(document.location)).searchParams;
        this.id = parseInt(params.get('id'));
    }

    async main() {
        // Get Data and parse content with the Id
        const { photographers, media } = await FetchApi.get(this.dataURL);
        const photographerData = photographers.filter( user => user.id === this.id )[0];
        const mediaData = media.filter( media => media.photographerId === this.id );

        // Display Header
        const templateHeader = new PageHeader(photographerData);
        this.$wrapper.appendChild(templateHeader.createHeader())

        // Gallery
        for (const media of mediaData)  {
            // factory return image or video
            // media.createCard()

        }

    }  
}

const page = new Page()
page.main()




