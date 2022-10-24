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
    }

    createCard() {
        const html =
            `<img 
                tabindex="0"
                class="card-media__media"
                alt="${this.title}" 
                src="${this.imageSrc}"
                >
            `;
        return this.cardTemplate.create(html);
    }
}

class MediaVideo extends Media {
    constructor(data) {
        super(data);
        this.video = data.video;
        this.videoSrc = `assets/media/large/${this.photographerId}/${this.video}`;
    }

    createCard() {
        const html =
            `<video
                tabindex="0"
                class="card-media__media" 
                src="${this.videoSrc}">
            </video>
            `;
        return this.cardTemplate.create(html);
    }
}