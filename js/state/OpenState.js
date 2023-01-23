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
    this.states.forEach((state) => {
      const interactiveElements = document.querySelectorAll(`[data-open=${state.className}`);
      interactiveElements.forEach((elt) => {
        elt.addEventListener('click', () => {
          this.open(state);
        });

        elt.addEventListener('keydown', (e) => {
          if (e.key === "Enter") {
            this.open(state);
          }
        });
      });
    })
  }

  open(state) {
    state.open();
    const statesToClose = this.states.filter((_state) => _state.className !== state.className);
    statesToClose.forEach((state) => {
      state.close();
    })
  }
}

// Modal state : switch display classes and ARIA
class StateModal {
  constructor(className) {
    this.className = className;
    this.element = document.querySelector(`.${this.className}`);
    this.handleEsc();
  }

  open() {
    this.element.classList.replace('hide', 'show');
    this.element.setAttribute('aria-hidden', 'false');
    this.element.focus();
  }

  close() {
    this.element.setAttribute('aria-hidden', 'true');
    this.element.classList.replace('show', 'hide');
  }

  // Key "Escape" : close the modal
  handleEsc() {
    document.addEventListener("keydown", (e) => {
      if (this.element.getAttribute('aria-hidden') === 'false') {
        if (e.key === 'Escape') this.close();
      }
    });
  }
}

// Main state : switch ARIA
class StateMain {
  constructor(className) {
    this.className = className;
    this.element = document.querySelector(`.${this.className}`);
    this.$body = document.body;
  }

  open() {
    this.element.setAttribute('aria-hidden', 'false');
    this.$body.classList.remove('no-scroll');
    this.element.focus();
  }

  close() {
    this.element.setAttribute('aria-hidden', 'true');
    this.$body.classList.add('no-scroll');
  }
}