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

        <div class="sort__container">

        <button class="sort__btn" aria-label="Ouvrir le menu de tri">
        <i class="fa-solid fa-arrow-down sort__btn__icon"></i>
      </button>

        <div class="sort__select" >
          <button aria-label="Triez par popularité" data-sortBy="pop">Popularité</button>
          <div class="sort__select__footer hide">
          <button aria-label="Triez par date" data-sortBy="date">Date</button>
          <button aria-label="Triez par titre" data-sortBy="title">Titre</button>
          </div>
        </div>


        </div>
        `;
    this.$wrapper.innerHTML = html;

    this.setListeners();
    return this.$wrapper;
  }

  setListeners() {

    // Trigger the sort
    const elements =  this.$wrapper.querySelectorAll('[data-sortBy]');
    elements.forEach( (elt) => {
      elt.addEventListener( 'click', (e) => {
        this.sort(elt.getAttribute('data-sortBy'));
      })
    })

    // Open/hide dropdown menu
    const btn = this.$wrapper.querySelector('.sort__btn');
    const menu_footer = this.$wrapper.querySelector('.sort__select__footer');
    const icon =  this.$wrapper.querySelector('.sort__btn__icon');
    btn.addEventListener('click', (e) => {
      menu_footer.classList.toggle('hide');
      if (icon.classList.contains('fa-arrow-down') ) {
        icon.classList.replace('fa-arrow-down', "fa-arrow-up");
      } else if (icon.classList.contains ('fa-arrow-up') ) {
        icon.classList.replace('fa-arrow-up', "fa-arrow-down");
      }
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
