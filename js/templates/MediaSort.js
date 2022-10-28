class MediaSort {

  constructor(media, likesSubject) {
    // DOM
    this.$wrapper = document.createElement('div');
    this.$wrapper.classList.add('sort');
    this.$wrapper.setAttribute('aria-label', 'Triez les médias');

    

    // Data
    this.count = 0;
    this.media = media;
    this.likesSubject = likesSubject;
  }

  create() {
    const html = `
        <p>Trier par</p>
        <ul class="sort__ul">
          <li data-sortBy="pop">Popularité</li>
          <li data-sortBy="date">Date</li>
          <li data-sortBy="title">Titre</li>
        </ul>
        `;
    this.$wrapper.innerHTML = html;

    this.setListeners();
    return this.$wrapper;
  }

  setListeners() {
    const elements =  this.$wrapper.querySelectorAll('[data-sortBy]');
    elements.forEach( (elt) => {
      elt.addEventListener( 'click', (e) => {
        this.sort(elt.getAttribute('data-sortBy'));
      })
    })
  }

  sort(type) {
    if ( type === "title") {
      this.media.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      })
    } else if ( type === "date") {
      this.media.sort(function (a, b) {
         return new Date(b.date) - new Date(a.date);
      })
    } else if (type === "pop") {
      this.media.sort(function (a, b) {
        return b.likes - a.likes ; // du plus grand au plus petit
      })
    }

    this.updateGallery();
  }

  updateGallery() {
    // Reset Gallery and Counter
    this.likesSubject.fire("RESET", 0);
    this.$wrapperGallery = document.querySelector('.gallery');
    this.$wrapperGallery.innerHTML = "";

    // Populate the new sorted gallery
    this.media.forEach(media => {
        const template = new MediaCard(media, this.likesSubject);
        this.$wrapperGallery.appendChild(template.create());
    });
  }
}
