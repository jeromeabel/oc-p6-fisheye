// Media Model
// Parent class and children classes

class Media {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }
}

class MediaImage extends Media {
  constructor(data) {
    super(data);
    this.image = data.image;
    this.smallImg = `assets/media/small/${this.photographerId}/${this.image}`;
    this.largeImg = `assets/media/large/${this.photographerId}/${this.image}`;

    // Media Element
    this.$element = document.createElement('img');
    this.$element.setAttribute('tabindex', '0');
    this.$element.setAttribute('alt', this.title);
    this.$element.setAttribute('src', this.largeImg);
    this.$element.setAttribute('data-id', this.id);
    this.$element.setAttribute('data-open', 'lightbox');
  }

  get elementThumbnail() {
    this.$element.setAttribute('src', this.smallImg);
    return this.$element;
  }

  get element() {
    this.$element.setAttribute('src', this.largeImg);
    return this.$element;
  }
}

class MediaVideo extends Media {
  constructor(data) {
    super(data);
    this.video = data.video;
    this.videoSrc = `assets/media/large/${this.photographerId}/${this.video}`;

    // Media Element
    this.$element = document.createElement('video');
    this.$element.setAttribute('tabindex', '0');
    this.$element.setAttribute('src', this.videoSrc);
    this.$element.setAttribute('data-id', this.id);
    this.$element.setAttribute('data-open', 'lightbox');
  }

  get elementThumbnail() {
    return this.$element;
  }

  get element() {
    return this.$element;
  }
}