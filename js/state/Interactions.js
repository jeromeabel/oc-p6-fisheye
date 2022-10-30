class Interactions {
    constructor(lightbox ) {
        
        this.lightbox = lightbox;
        this.likesCounter = new Counter();

        this.setLikes();
        this.setLikesCounter();
        this.setOpenLightBox();
        // lightbox : open, next, prev, close
        // card : open lightbox, add likes > this + counter, loading add likes
        // sort : createGallery, reset counter ?
    }

    setLikesCounter() {
        const likesNb = document.querySelectorAll('span.likes');
        likesNb.forEach( (elt) => { 
            const val = parseInt(elt.textContent);
            this.likesCounter.update('ADD', val);
        });
    }

    setLikes(){
        const likesButtons = document.querySelectorAll('button.btn-likes');

        likesButtons.forEach( (btn) => { 
            btn.addEventListener('click', () => {
                const elt = btn.previousElementSibling; // span.likes element
                const value = parseInt(elt.textContent);
                
                if (btn.classList.contains('liked')) {
                    btn.classList.remove('liked')
                    this.likesCounter.update('ADD', -1);
                    elt.textContent = value - 1;
                } else {
                    console.log('add');
                    btn.classList.add('liked')
                    this.likesCounter.update('ADD', 1)
                    elt.textContent = value + 1;
                }

            })
        });
    }

    setOpenLightBox() {
        const allMedia = document.querySelectorAll('[data-open="lightbox"]');
        
        allMedia.forEach( (media) => { 
            media.addEventListener('click', (e) => {
                const id = parseInt(media.getAttribute('data-id'));
                this.lightbox.open(id);
            })
        });
    }
}


class Counter {
    constructor() {
      this.count = 0;
      this.$likesCount =  document.querySelector('.likes__count')
    }
  
    update(action, value) {
      if (action === 'ADD') {
        this.count += value;
      } else if (action === 'RESET') {
        this.count = 0;
      } else {
        throw "Likes Counter Error : Unknow action"
      }
      this.$likesCount.textContent = this.count
    }
  }