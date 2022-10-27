// Define three main states for the Application : main, contact, lightbox
// Elements must have an attribute "data-open" with on oh these three states
class OpenState {
    constructor() {
        this.states = [
            new StateMain('main'),
            new StateModal('contact'),
            new StateModal('lightbox')
        ];
    }

    setListeners() {
        // Define an event listener for all elements with "data-open" attribute
        this.states.forEach( (state) => {
            const interactiveElements = document.querySelectorAll(`[data-open=${state.className}`);
            interactiveElements.forEach( (elt) => {
                elt.addEventListener('click', (e) => {
                    this.open(state);
                    console.log(state);
                });
            });
        })
    }

    open(state) {
        state.open();
        const statesToClose = this.states.filter( (_state) => _state.className !== state.className );
        statesToClose.forEach( (state) => {
            state.close();
        })
    }
}

// Modal state : switch display classes and ARIA
class StateModal {
    constructor (className) {
        this.className = className;
        this.element = document.querySelector(`.${this.className}`);
    }

    open(){
        this.element.classList.replace('hide', 'show');
        this.element.setAttribute('aria-hidden', 'false');
    }

    close() {
        this.element.setAttribute('aria-hidden', 'true');
        this.element.classList.replace('show', 'hide');
    }
}

// Main state : switch ARIA
class StateMain {
    constructor (className) {
        this.className = className;
        this.element = document.querySelector(`.${this.className}`);
        this.$body = document.body;
    }

    open(){
        this.element.setAttribute('aria-hidden', 'false');
        this.$body.classList.remove('no-scroll');
        
    }

    close() {
        this.element.setAttribute('aria-hidden', 'true');
        this.$body.classList.add('no-scroll');
    }
}


/*        this.$wrapper.classList.add('show');
        this.$wrapper.classList.remove('hide');
        this.$wrapper.setAttribute('aria-hidden', 'false');
        
        this.$wrapper.focus();

        this.$page.setAttribute('aria-hidden', 'true');
        this.$body.classList.add('no-scroll');
    }

    close() {
        this.opened = false;

        this.$wrapper.classList.remove('show');
        this.$wrapper.classList.add('hide');
        this.$wrapper.setAttribute('aria-hidden', 'true');
        this.$wrapper.setAttribute('aria-modal', 'false');
        this.$page.setAttribute('aria-hidden', 'false');
        this.$body.classList.remove('no-scroll');
        */