class MediaCard {

  constructor(media, likesSubject) {
    // DOM
    this.$wrapper = document.createElement('div');
    this.class = 'media-card';
    this.$wrapper.classList.add(this.class);

    // Data
    this.element = media.elementThumbnail;
    this.id = media.id;
    this.title = media.title;
    this.likes = media.likes;
    this.likesSubject = likesSubject;
  }

  create() {
    const footerHtml =
      `<h2>${this.title}</h2>
        <p>
          <span class="likes">${this.likes}</span>
          <button class="btn-likes" aria-label="Ajouter à la liste des favoris">
            <i class="fa fa-heart" aria-label="J'aime"></i>
          </button>
        </p>
      `;

    const footerElt = document.createElement('div');
    footerElt.classList.add(`${this.class}__footer`);
    footerElt.innerHTML = footerHtml;

    this.$wrapper.appendChild(this.element);
    this.$wrapper.appendChild(footerElt);

    // Update Likes Counter
    this.setListener();
    this.likesSubject.fire('ADD', this.likes );
    
    return this.$wrapper;
  }

  setListener() {
    const that = this;

    const likesWrapper = this.$wrapper.querySelector('.likes');
    
    // Add 1 like or remove it
    this.$wrapper
      .querySelector('.btn-likes')
      .addEventListener('click', function() {
        if (this.classList.contains('liked')) {
          this.classList.remove('liked')
          that.likesSubject.fire('ADD', -1);
          likesWrapper.innerHTML = that.likes;
        } else {
          this.classList.add('liked')
          that.likesSubject.fire('ADD', 1)
          likesWrapper.innerHTML = that.likes + 1;
        }
      })
  }
}