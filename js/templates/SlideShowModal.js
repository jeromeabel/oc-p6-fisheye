class SlideShowModal {
    constructor(data) {
        this.data = data;
        this.index = 0;
        this.currentMedia = {};
        this.opened = false;

        this.$body = document.body;
        this.$page = document.querySelector('.page');
        this.$wrapper = document.getElementById('slideshow');
        this.$image = document.querySelector('.slide__img');
        this.$video = document.querySelector('.slide__video');
        this.$name = document.querySelector('.slide__name');

        // Buttons
        this.closeBtn = document.querySelector('.slide__close');
        this.nextBtn = document.querySelector('.slide__next');
        this.prevBtn = document.querySelector('.slide__prev');
        this.closeBtn.addEventListener('click', () =>  this.close());
        this.nextBtn.addEventListener('click', () => this.next());
        this.prevBtn.addEventListener('click',  () => this.prev());
    }

    isOpened() {
        return this.opened;
    }

    changeMedia() {
        this.currentMedia = this.data[this.index];
        if ( this.currentMedia.image  ) {
            const url = `./assets/media/large/${this.currentMedia.photographerId}/${this.currentMedia.image}`;
            this.$image.setAttribute('src', url);
            this.$image.classList.add('show');
            this.$image.classList.remove('hide');
            this.$video.classList.add('hide');
            this.$video.classList.remove('show');
        } else if ( this.currentMedia.video  ) {
            const url = `./assets/media/large/${this.currentMedia.photographerId}/${this.currentMedia.video}`;
            this.$video.setAttribute('src', url);
            this.$video.classList.add('show');
            this.$video.classList.remove('hide');
            this.$image.classList.add('hide');
            this.$image.classList.remove('show');
        } else {
            console.log('Slideshow Error : no media found')
        }

        this.$name.textContent = this.currentMedia.title;
    }

    open(id) {
        // strict equality ? type ?
        this.index = this.data.findIndex( (data) => data.id == id );
        this.changeMedia();
        this.opened = true;

        this.$wrapper.classList.add('show');
        this.$wrapper.classList.remove('hide');
        this.$wrapper.setAttribute('aria-hidden', 'false');
        this.$wrapper.setAttribute('aria-modal', 'true');
        this.$wrapper.focus();

       // this.$page.setAttribute('tabindex', '-1');
        this.$page.setAttribute('aria-hidden', 'true');
        this.$body.classList.add('no-scroll');
    }

    close() {
        this.opened = false;
    
        this.$wrapper.classList.remove('show');
        this.$wrapper.classList.add('hide');
        this.$wrapper.setAttribute('aria-hidden', 'true');
        this.$wrapper.setAttribute('aria-modal', 'false');
        this.$page.setAttribute('aria-hidden', 'false');
        this.$body.classList.remove('no-scroll');
    }

    next() {
        this.index++;
        if (this.index >= this.data.length ) this.index = 0
        this.changeMedia()
    }

    prev() {
        this.index--;
        if (this.index < 0 ) this.index = this.data.length - 1; 
        this.changeMedia()
    }

}