class MediaCard {

  constructor(media) {
    // DOM
    this.$wrapper = document.createElement('div');
    this.class = 'media-card';
    this.$wrapper.classList.add(this.class);

    // Data
    this.element = media.elementThumbnail;
    this.id = media.id;
    this.title = media.title;
    this.likes = media.likes;
  }

  create() {
    const footerHtml =
      `<h2>${this.title}</h2>
        <p>
          <span class="likes">${this.likes}</span>
          <button class="btn-like" aria-label="Bouton de favoris">
            <i class="fa fa-heart" aria-label="J'aime"></i>
          </button>
        </p>
      `;


    const footerElt = document.createElement('div');
    footerElt.classList.add(`${this.class}__footer`);
    footerElt.innerHTML = footerHtml;

    this.$wrapper.appendChild(this.element);
    this.$wrapper.appendChild(footerElt);
    
    return this.$wrapper;
  }
}