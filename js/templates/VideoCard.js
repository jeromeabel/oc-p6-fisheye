class VideoCard {
    constructor(data) {
        this.data = data;
        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('card-media');
        this.$wrapper.setAttribute('tabindex', '0');
    }

    createCard() {
        this.$wrapper.setAttribute('data-id', this.data.id);
        const card = `
            <video
                tabindex="0"
                class="card-media__media" 
                src="assets/media/large/${this.data.photographerId}/${this.data.video}">
            </video>
            <div class="card-media__footer">
               <h2>${this.data.title}</h2>
               <div class="card-media__like">
                 <span class="likes">${this.data.likes}</span>
                 <span class="btn-like">🖤</span>
               </div>
            </div>
        `
        this.$wrapper.innerHTML = card;
        return this.$wrapper;
    }
   
    setLikeListeners() {
    
    }
}


/*
		{
			"id": 8328953,
			"photographerId": 82,
			"title": "Wooden sculpture of a horse",
			"video": "Art_Wooden_Horse_Sculpture.mp4",
			"likes": 24,
			"date": "2011-12-08",
			"price": 100
		  },
		{
			"id": 7502053,
			"photographerId": 82,
			"title": "Triangle Man",
			"image": "Art_Triangle_Man.jpg",
			"likes": 88,
			"date": "2007-05-07",
			"price": 55
		},
        */