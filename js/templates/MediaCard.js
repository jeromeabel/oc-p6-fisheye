class MediaCard {

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.likes = data.likes;

    this.$wrapper = document.createElement('div');
    this.$wrapper.classList.add('media-card');
    this.$wrapper.setAttribute('data-id', this.id);
  }

  create(htmlSource) {
    const footer =
      `<div class="media-card__footer">
        <h2>${this.title}</h2>
        <p>
          <span class="likes">${this.likes}</span>
          <span class="btn-like">
            <i class="fa fa-heart" aria-label="likes"></i>
          </span>
        </p>
      </div>
      `
    this.$wrapper.innerHTML = htmlSource + footer;
    return this.$wrapper;
  }
}