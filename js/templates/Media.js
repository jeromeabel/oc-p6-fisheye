class Media {
    constructor(data) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;

        // Set common template for media
        this.cardTemplate = new MediaCard(data);
    }
}

class MediaImage extends Media {
    constructor(data) {
        super(data);
        this.image = data.image;
        this.imageSrc = `assets/media/small/${this.photographerId}/${this.image}`;

        // Media Element
        this.$imgElt = document.createElement('img');
        this.$imgElt.setAttribute('tabindex', '0');
        this.$imgElt.setAttribute('alt', this.title);
        this.$imgElt.setAttribute('src', this.imageSrc);
    }

    get element() {
        return this.$imgElt;
    }

    createCard() {
        return this.cardTemplate.create(this.$imgElt);
    }
}

class MediaVideo extends Media {
    constructor(data) {
        super(data);
        this.video = data.video;
        this.videoSrc = `assets/media/large/${this.photographerId}/${this.video}`;

        // Media Element
        this.$videoElt = document.createElement('video');
        this.$videoElt.setAttribute('tabindex', '0');
        this.$videoElt.setAttribute('src', this.videoSrc);
    }

    get element() {
        return this.$videoElt;
    }

    createCard() {
        return this.cardTemplate.create(this.$videoElt);
    }
}