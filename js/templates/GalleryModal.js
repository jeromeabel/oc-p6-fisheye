class GalleryModal {
    constructor() {
        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('modal');
        this.url =""
    }

    create() {
        const html = `
        <div class="modal__content">
            <img src="${this.url}">
        </div>
        `
        this.$wrapper.innerHTML = html;
        return this.$wrapper;
    }

    show(id) {
        this.url = url;
        this.$wrapper.classList.add('show');
    }

    hide() {
        this.$wrapper.classList.remove('show');
    }

}