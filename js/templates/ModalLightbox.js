class ModalLightbox {

    constructor() {
       this.$wrapper = document.querySelector('.lightbox');
       this.$wrapper.setAttribute('aria-label', 'Affichage lightbox des photos');
       this.$wrapper.setAttribute('aria-hidden', 'true');
       this.$wrapper.setAttribute('role', 'dialog');
       this.$wrapper.setAttribute('aria-describedby', 'lightboxTitle');

       this.create(); //??
       this.$mediaWrapper = document.querySelector('.slide__media');
       this.index = 0;
       this.media = [];
    }

    setMedia(media) {
      this.media = media;
     // console.log(this.media);
    }

    create(){
        const html = ` 
        <div class="slide">
        <button class="btn-icon slide__close" aria-label="Fermer le slideshow">
          <i class="fa fa-close" aria-hidden="true"></i>
        </button>
        <button class="btn-icon slide__prev" aria-label="Image précédente">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button class="btn-icon slide__next" aria-label="Image suivante">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
  
        <div class="slide__media"></div>
      </div>
        `
      this.$wrapper.innerHTML = html;
    }

    setListeners(){
      document.querySelector('.slide__next').addEventListener('click', (e) => {
        this.next();
      })

      document.querySelector('.slide__prev').addEventListener('click', (e) => {
        this.prev();
      })
    }

    setMediaElement(elt) {
      const id = parseInt(elt.getAttribute("data-id"));
      this.index = this.media.findIndex((data) => data.id === id);
      this.changeMedia()
    }

    changeMedia() {
      this.$mediaWrapper.innerHTML = " ";
      const newElement = this.media[this.index].element.cloneNode();
      if (newElement.tagName === 'VIDEO') newElement.setAttribute("controls", "true");
      this.$mediaWrapper.appendChild(newElement);
      const p = document.createElement('p');
      p.textContent = newElement.title;
      this.$mediaWrapper.appendChild(p);
    }

    next() {
      this.index++;
      if (this.index >= this.media.length) this.index = 0
      this.changeMedia()
  }

  prev() {
      this.index--;
      if (this.index < 0) this.index = this.media.length - 1;
      this.changeMedia()
  }

    getCloseElement() {
      return document.querySelector('.slide__close');
    }

    show() {
        this.$wrapper.classList.add('show');
    }

    hide() {
        this.$wrapper.classList.remove('show');
    }
}
