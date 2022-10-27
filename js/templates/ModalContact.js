class ModalContact {

  constructor(name) {
    this.$wrapper = document.querySelector('.contact');
    this.$wrapper.setAttribute('aria-label', 'Formulaire de contact');
    this.$wrapper.setAttribute('aria-hidden', 'true');
    this.$wrapper.setAttribute('aria-modal', 'true');
    this.$wrapper.setAttribute('role', 'dialog');
    this.$wrapper.setAttribute('aria-describedby', 'contactTitle');
    this.name = name;
  }

  create() {
    const html = ` 
        <div class="contact__wrapper">

        <div class="contact__content">

        <header>
          <h2 id="contact-title aria-label="Contactez-moi ${this.name}">Contactez-moi<br>${this.name}</h2>
          <button class="btn-icon" data-open="main" aria-label="Fermer le formulaire de contact">
            <i class="fa fa-close white" aria-hidden="true"></i>
          </button>
        </header>
  
        <form class="contact__form" role="form">
          <div role="group" aria-labelledby="coordonnees">
            <p id="coordonnees" class="screenreader-only">Veuillez entrer vos coordonnées</p>
            <label if="firstname-label" for="firstname">Prénom</label>
            <input type="text" name="firstname" id="firstname" aria-labelledby="firstname-label" required>
            <label if="lastname-label" for="lastname">Nom</label>
            <input type="text" name="lastname" id="lastname" aria-labelledby="lastname-label" required>
            <label if="email-label" for="email">Email</label>
            <input type="email" name="email" id="email" aria-labelledby="email-label" required>
          </div>
  
          <div role="group" class="contact__message" aria-labelledby="message-title">
            <p id="message-title" class="screenreader-only">Veuillez entrer votre message</p>
            <label id="message-label" for="message">Votre message</label>
            <textarea name="message" id="message" aria-labelledby="message-label" required rows="4"></textarea>
          </div>
  
          <button class="btn btn-submit" data-open="main">Envoyer</button>
        </form>
  
      </div>
      </div>
        `
    this.$wrapper.innerHTML = html;
  }
}