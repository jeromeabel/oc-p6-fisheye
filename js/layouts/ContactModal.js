class ContactModal {
    constructor(name) {
        this.name = name;
        this.opened = false;
        this.$body = document.body;
        this.$page = document.querySelector('.page');
        this.$wrapper = document.getElementById('contact-form');
        this.$wrapper.setAttribute('tabindex', '-1');

        document.getElementById('contact-title').innerHTML = `Contactez-moi<br>${this.name}`

        // Open, close buttons
        this.closeBtn = document.querySelector('.contact__close');
        this.openBtn = document.querySelector('.contact__open');
        this.closeBtn.addEventListener('click', () => this.close());
        this.openBtn.addEventListener('click', () => this.open());
    }

    isOpened() {
        return this.opened;
    }

    open(id) {
        this.handleFocus();
        this.opened = true;

        this.$wrapper.classList.add('show');
        this.$wrapper.classList.remove('hide');
        this.$wrapper.setAttribute('aria-hidden', 'false');
        this.$wrapper.setAttribute('aria-modal', 'true');
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