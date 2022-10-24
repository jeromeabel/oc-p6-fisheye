class MediaGallery {

    constructor(media) {
        this.$wrapper = document.createElement('section');
        this.$wrapper.classList.add('gallery');
        this.$wrapper.classList.add('grid');

        this.media = [];
        for (const mediaData of media) {
            this.media.push(new MediaFactory(mediaData));
        }
    }

    create() {
        for (const media of this.media) {
            this.$wrapper.appendChild(media.createCard())
        }
        return this.$wrapper;
    }
}