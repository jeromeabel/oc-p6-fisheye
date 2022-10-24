class State {
    constructor(elements) {
        this.$body = document.body;
        this.elements =  elements;
        this.update(0);
    }

    hide(elt) {
        elt.setAttribute('aria-hidden', 'true');
        this.$body.classList.add('no-scroll');
    }

    show(elt) {
        elt.setAttribute('aria-hidden', 'false');
        this.$body.classList.remove('no-scroll');
    }

    update(state) {
        switch(state) {
            case 0:
                this.show(this.elements[0])
                this.elements[1].hide();
                this.elements[2].hide();
                break;
            case 1:
                this.hide(this.elements[0])
                this.elements[1].show();
                this.elements[2].hide();
                break;
            case 2:
                this.hide(this.elements[0])
                this.elements[1].hide();
                this.elements[2].show();
                break;
            default:
                console.log("State error : no such element");
                break;
        }
    }
}
