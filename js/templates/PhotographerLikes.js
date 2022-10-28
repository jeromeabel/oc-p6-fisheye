class PhotographerLikes {

  constructor(photographer) {
    // DOM
    this.$wrapper = document.createElement('div');
    this.$wrapper.classList.add('like');
    this.$wrapper.setAttribute('aria-label', 'Affichage du nombre de likes');
    this.$wrapper.setAttribute('aria-hidden', 'true');

    // Data
    this.count = 0;
    this.price = photographer.priceByDay;
  }

  create() {
    const html = `
    <p>
      <span class="likes__count">${this.count}</span>
      <i class="fa fa-heart" aria-label="J'aime"></i>
      </p>
      <p>${this.price}</p>
    `
    this.$wrapper.innerHTML = html;
    return this.$wrapper;
  }
}
