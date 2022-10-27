class ModalLightbox {

  constructor(media) {
    // DOM
    this.$wrapper = document.querySelector('.lightbox');
    this.$wrapper.setAttribute('aria-label', 'Affichage lightbox des photos');
    this.$wrapper.setAttribute('aria-hidden', 'true');
    this.$wrapper.setAttribute('aria-modal', 'true');
    this.$wrapper.setAttribute('role', 'dialog');
    this.$wrapper.setAttribute('aria-describedby', 'lightboxTitle');

    // Data
    this.index = 0;
    this.media = media;
  }

  create() {
    const html = ` 
        <div class="slide">
        <button class="btn-icon slide__close" data-open="main" aria-label="Fermer le slideshow">
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

  setListeners() {

    // Set previous and next media
    document.querySelector('.slide__next').addEventListener('click', (e) => {
      this.next();
    })

    document.querySelector('.slide__prev').addEventListener('click', (e) => {
      this.prev();
    })

    // Set new media when opened
    const medialElements = document.querySelectorAll('[data-id]');
    medialElements.forEach( (elt) => {
        elt.addEventListener('click', (e) => {
          const id = parseInt(elt.getAttribute("data-id"));
          this.setMediaId(id);
        });
    });
  }

  setMediaId(id) {
    // Find index
    this.index = this.media.findIndex((data) => data.id === id);
    this.changeMedia();
  }

  changeMedia() {
    
    const mediaWrapper = document.querySelector('.slide__media');

    // Fill media element
    mediaWrapper.innerHTML = " "; // clear
    const newElement = this.media[this.index].element.cloneNode();
    if (newElement.tagName === 'VIDEO') newElement.setAttribute("controls", "true");
    
    // Title
    const p = document.createElement('p');
    p.textContent = this.media[this.index].title;

    mediaWrapper.appendChild(newElement);
    mediaWrapper.appendChild(p);
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
}
