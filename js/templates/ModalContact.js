class ModalContact {

  constructor(name) {
    // DOM
    this.$wrapper = document.querySelector('.contact');
    this.$wrapper.setAttribute('role', 'dialog');
    this.$wrapper.setAttribute('aria-modal', 'true');
    this.$wrapper.setAttribute('aria-hidden', 'true');
    this.$wrapper.setAttribute('aria-label', 'Formulaire de contact');
    this.$wrapper.setAttribute('aria-describedby', 'contactTitle');
    this.$wrapper.setAttribute('tabindex', '-1'); // Needed for focus()

    // Data
    this.name = name;
  }

  create() {
    const html = ` 
        <div class="contact__wrapper">

        <div class="contact__content">
          <p id="contactTitle" class="screenreader-only">Remplir le formulaire de contact</p>

          <div class="contact__header">
            <h2 id="contact-title aria-label="Contactez-moi ${this.name}">Contactez-moi<br>${this.name}</h2>
            <button class="btn-close-contact" data-open="main" aria-label="Fermer le formulaire de contact">
              <i class="fa fa-close" aria-hidden="true"></i>
            </button>
          </div>
  
          <form class="contact__form" role="form">
            <div role="group" aria-labelledby="coordonnees">
              <p id="coordonnees" class="screenreader-only">Veuillez entrer vos coordonnées</p>
              <label if="firstname-label" for="firstname">Prénom</label>
              <input type="text" name="firstname" id="firstname" aria-labelledby="firstname-label">
              <label if="lastname-label" for="lastname">Nom</label>
              <input type="text" name="lastname" id="lastname" aria-labelledby="lastname-label">
              <label if="email-label" for="email">Email</label>
              <input type="email" name="email" id="email" aria-labelledby="email-label">
            </div>
  
            <div role="group" class="contact__message" aria-labelledby="message-title">
              <p id="message-title" class="screenreader-only">Veuillez entrer votre message</p>
              <label id="message-label" for="message">Votre message</label>
              <textarea name="message" id="message" aria-labelledby="message-label" rows="3"></textarea>
            </div>
    
            <button class="btn btn-submit" data-open="main">Envoyer</button>
          </form>
      </div>
      </div>
        `
    this.$wrapper.innerHTML = html;

    this.setListener();
    this.handleFocus();
  }

  setListener(){
    const btn = this.$wrapper.querySelector('button.btn-submit');
    const that = this;
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      console.group("Valeurs des champs du formulaire");

      const allInputs = that.$wrapper.querySelectorAll('input');
      allInputs.forEach( (elt) => {
        console.log(`${elt.getAttribute('id')} : ${elt.value}`);
      });

      const textarea = that.$wrapper.querySelector('#message');
      console.log(`${textarea.getAttribute('id')} : ${textarea.value}`);
      
      console.groupEnd();
    });
  }


  // Handle Tab Event to stay in Modal Elements
  handleFocus() {
    // All the elements inside modal which you want to make focusable
    const elementsList = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = this.$wrapper.querySelectorAll(elementsList);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') {
        return;
      }

      // Switch focus when first and last element are reached
      if (e.shiftKey) { // Shift + tab combination
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else { // Tab pressed
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    });

    firstElement.focus();
  }
}