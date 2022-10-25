class PhotographerFactory {
    constructor(data, media) {
        this.data = data;
        this.media = media;

        this.cardTemplate = new PhotographerCard(this.data);
        
        this.headerTemplate = new PhotographerHeader(this.data);
        if (this.media) this.galleryTemplate = new MediaGallery(this.media);
        // this.filterTemplate = new Filter(this.media);
        // this.likesTemplate = new Likes(this.media)
    }

    get name() {
        return this.data.name;
    }

    get gallery() {
        return this.galleryTemplate;
    }
    
    createPortrait() {
        return this.cardTemplate.create();
    }

    createHeader() {
        return this.headerTemplate.create();
    }

    createGallery(){
        return this.galleryTemplate.create();
    }

    getContactElement() {
        return this.headerTemplate.getContactElement();
    }

    getMediaElements(){
        return this.galleryTemplate.getMediaElements();
    }

}