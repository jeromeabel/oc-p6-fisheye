class PhotographerCard {

  constructor(photographer) {
    this.$wrapper = document.createElement('article');
    this.class = 'photographer-card';
    this.$wrapper.classList.add(this.class);
    this.photographer = photographer;
  }

  create() {
    // Use Template Strings
    const html = `
                <div class="${this.class}__header">
                    <a href="photographer.html?id=${this.photographer.id}" arial-label="${this.photographer.name}">
                        <img class="img-rounded" alt="" src="${this.photographer.portraitURL}">
                        <h2>${this.photographer.name}</h2>
                    </a>
                </div>
                <p class="${this.class}__body">
                    <span class="${this.class}__location">${this.photographer.location}</span>
                    <span class="${this.class}__tagline">${this.photographer.tagline}</span>
                    <span class="${this.class}__price">${this.photographer.priceByDay}</span>
                </p>
        `;
    this.$wrapper.innerHTML = html;
    return this.$wrapper;
  }

}
