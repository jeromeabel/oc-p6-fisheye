class ModalFactory {
    constructor(type) {
        if (type === "contact") {
            return new ModalContact();
        } else if (type === "lightbox") {
            return new ModalLightbox();
        } else {
            throw "MediaFactory Error : Unkown type";
        }
    }
}