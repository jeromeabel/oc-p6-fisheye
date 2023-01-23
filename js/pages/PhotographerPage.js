class PhotographerPage {
  constructor() {
    // DOM
    this.$title = document.title;
    this.$wrapper = document.querySelector('.main');

    // Get Id from the URL
    const params = (new URL(document.location)).searchParams;
    this.id = parseInt(params.get('id'));

    // Data
    this.photographer = null;
    this.media = [];

    // Likes
    this.likesSubject = new LikesSubject();

    // Manage open & close interactions
    this.openState = new OpenState();
  }

  async setData() {
    const { photographers, media } = await PhotographerApi.getData();

    // Create the Photographer from the Id
    const photographerData = photographers.filter(user => user.id === this.id)[0];
    this.photographer = new Photographer(photographerData);

    // Create the Media array from the Photographer
    const mediaData = media.filter(media => media.photographerId === this.photographer.id);
    this.media = mediaData.map((data) => new MediaFactory(data));
  }

  setTitle() {
    this.$title = `${this.photographer.name} - Fisheye`;
  }

  createHeader() {
    const headerTemplate = new PhotographerHeader(this.photographer);
    this.$wrapper.appendChild(headerTemplate.create());
  }

  createLikesCounter() {
    const templateLikes = new PhotographerLikes(this.photographer);
    this.$wrapper.appendChild(templateLikes.create());
        
    // Likes Counter
    this.likesSubject.subscribe(new LikesCounter());
  }

  createSorter() {
    const templateSort = new MediaSort(this.media, this.likesSubject);
    this.$wrapper.appendChild(templateSort.create());
  }

  createGallery() {
    this.$wrapperGallery = document.createElement('section');
    this.$wrapperGallery.classList.add('gallery');
    this.$wrapperGallery.classList.add('grid');

    this.media.forEach(media => {
      const template = new MediaCard(media, this.likesSubject);
      this.$wrapperGallery.appendChild(template.create());
    })

    this.$wrapper.appendChild(this.$wrapperGallery);
  }

  createModals() {
    const lightbox = new ModalLightbox(this.media);
    lightbox.create();

    const contact = new ModalContact(this.photographer.name);
    contact.create();
  }

  handleOpenStates() {
    this.openState.setListeners();
  }

  // Main Process
  async main() {
    await this.setData();
    this.setTitle();
    this.createLikesCounter();
    this.createHeader();
    this.createSorter();
    this.createGallery();
    this.createModals();
    this.handleOpenStates();
  }
}

const page = new PhotographerPage();
page.main();