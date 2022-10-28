class ModalLightbox {

  constructor(media) {
    // DOM
    this.$wrapper = document.querySelector('.lightbox');
    this.$wrapper.setAttribute('role', 'dialog');
    this.$wrapper.setAttribute('aria-modal', 'true');
    this.$wrapper.setAttribute('aria-hidden', 'true');
    this.$wrapper.setAttribute('aria-label', 'Affichage lightbox des photos');
    this.$wrapper.setAttribute('aria-describedby', 'lightboxTitle');
    this.$wrapper.setAttribute('tabindex', '-1'); // Needed for focus()

    // Data
    this.index = 0;
    this.media = media;
  }

  create() {
    const html = ` 
        <div class="slide">

          <p id="lightboxTitle" class="screenreader-only">Parcourez les photos de la lightbox</p>

          <button class="btn-icon slide__close" data-open="main" aria-label="Fermer la lightbox">
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

    this.setListeners();
    this.handleFocus();
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

    medialElements.forEach((elt) => {
      const id = parseInt(elt.getAttribute("data-id"));
      elt.addEventListener('click', (e) => this.setMediaId(id));
      elt.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.setMediaId(id);
        }
      });
    });

    // Key navigation
    const that = this;
    document.addEventListener("keydown", (e) => {
      if (that.$wrapper.getAttribute('aria-hidden') === 'false') {
        if (e.key === "ArrowLeft") that.prev();
        else if (e.key === "ArrowRight") that.next();
      }
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
    mediaWrapper.innerHTML = ""; // clear
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

  // Handle Tab Event to stay in Modal Elements
  handleFocus() {
    // All the elements inside modal which you want to make focusable
    const focusableElements = this.$wrapper.querySelectorAll('button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') {
        return;
      }

      // Switch focus when first and last element are reached
      if (e.shiftKey) { // Shift + tab combination
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else { // Tab pressed
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    });

    firstElement.focus();
  }
}