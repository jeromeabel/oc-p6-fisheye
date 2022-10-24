class MediaCard {

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.likes = data.likes;

    this.$wrapper = document.createElement('div');
    this.$wrapper.classList.add('media-card');
    this.$wrapper.setAttribute('data-id', this.id);
  }

  create(eltSource) {
    const footerhtml =
      `<h2>${this.title}</h2>
        <p>
          <span class="likes">${this.likes}</span>
          <span class="btn-like">
            <i class="fa fa-heart" aria-label="likes"></i>
          </span>
        </p>
      `
    const footerElt = document.createElement('div');
    footerElt.classList.add('media-card__footer');
    footerElt.innerHTML = footerhtml;
    this.$wrapper.appendChild(eltSource);
    this.$wrapper.appendChild(footerElt);
    //this.$wrapper.innerHTML = htmlSource + footer;
    return this.$wrapper;
  }
}