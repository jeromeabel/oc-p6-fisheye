class MediaCard {

  constructor(media, likesSubject, allMedia) {
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
    this.allMedia = allMedia;
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
    
    const currentMedia = that.allMedia.find( ( media ) => media.id === that.id );


    // Add 1 like or remove it
    this.$wrapper
        .querySelector('.btn-likes')
        .addEventListener('click', function() {
          if (this.classList.contains('liked') && currentMedia.liked) {
            this.classList.remove('liked');
            that.likesSubject.fire('ADD', -1);
            currentMedia.likes--;
            // that.likes--;
            // console.log(that.allMedia);
            currentMedia.liked = false;
           // likesWrapper.innerHTML = that.likes;
            likesWrapper.innerHTML = currentMedia.likes;


          } else {
            this.classList.add('liked');
            that.likesSubject.fire('ADD', 1)
           
            // const currentMedia = that.allMedia.find( ( media ) => media.id === that.id );
            currentMedia.likes++;
            currentMedia.liked = true;

            likesWrapper.innerHTML = currentMedia.likes;
            // that.likes++;

            // console.log("AllMedia: ");
            // console.log(that.allMedia);
          }
        })
    }
}