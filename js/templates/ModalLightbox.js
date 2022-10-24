class ModalLightbox {

    constructor() {
       this.$wrapper = document.querySelector('.lightbox');
       this.$wrapper.setAttribute('aria-label', 'Affichage lightbox des photos');
       this.$wrapper.setAttribute('aria-hidden', 'true');
       this.$wrapper.setAttribute('role', 'dialog');
       //this.$wrapper.setAttribute('aria-describedby', 'lightboxTitle');

       this.create();

       
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

      })

      document.querySelector('.slide__prev').addEventListener('click', (e) => {

      })
    }

    setMediaElement(elt) {
      const $media = document.querySelector('.slide__media');

      let html = ''
      const type = elt.tagName;
      if(type === 'IMG') {  
        html = `
        <img 
        src="${elt.getAttribute("src")}" 
        alt="${elt.getAttribute("alt")}">
        <p>${elt.getAttribute("alt")}</p>`
      } else if (type === 'VIDEO') {
        html = `
        <video 
        src="${elt.getAttribute("src")}" 
        title="${elt.getAttribute("title")}"
        controls>
        <p>${elt.getAttribute("title")}</p>`
      }

      $media.innerHTML = html;
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
