class ModalContact {

    constructor() {
        this.$wrapper = document.querySelector('.contact');
        this.$wrapper.setAttribute('aria-label', 'Formulaire de contact');
        this.$wrapper.setAttribute('aria-hidden', 'true');
        this.$wrapper.setAttribute('role', 'dialog');
        this.$wrapper.setAttribute('aria-describedby', 'contactTitle');
     }
 
     create(){
        const html = ` 
        <div class="modal__content">
        <header>
          <h2 id="contact-title">Contactez-moi</h2>
          <button class="btn-icon contact__close" aria-label="Fermer le formulaire de contact">
            <i class="fa fa-close" aria-hidden="true"></i>
          </button>
          <!-- <img src="assets/icons/close.svg" onclick="closeModal()" alt="Fermer modal" /> -->
        </header>
  
        <form class="form" role="form">
          <div role="group" aria-labelledby="coordonnees">
            <p id="coordonnees" class="screenreader-only">Veuillez entrer vos coordonnées</p>
            <label if="firstname-label" for="firstname">Prénom</label>
            <input type="text" name="firstname" id="firstname" aria-labelledby="firstname-label" required>
            <label if="lastname-label" for="lastname">Nom</label>
            <input type="text" name="lastname" id="lastname" aria-labelledby="lastname-label" required>
            <label if="email-label" for="email">Email</label>
            <input type="email" name="email" id="email" aria-labelledby="email-label" required>
          </div>
  
          <label id="message-label" for="message">Message</label>
          <textarea name="message" id="message" aria-labelledby="message-label" required rows="4">
          </textarea>
  
          <button class="btn-contact">Envoyer</button>
        </form>
  
      </div>
        `
        this.$wrapper.innerHTML = html;
    }

    setName(name) {

    }
 
     show() {
         this.$wrapper.classList.add('show');
     }
 
     hide() {
         this.$wrapper.classList.remove('show');
     }
}
