async function displayPage(photographer, medias) {

    const $wrapper = document.querySelector("#main");
    const photographerModel = photographerFactory(photographer);
   
    // Add to DOM
    $wrapper.appendChild(photographerModel.getPageHeaderDOM());
    $wrapper.appendChild(photographerModel.getPageFilterDOM());
    // $wrapper.appendChild(photographerModel.getPageGalleryDOM());

    // Gallery
    const $wrapperGallery = document.createElement('div');
    $wrapperGallery.classList.add('photograph-gallery');

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const cardDOM = mediaModel.getMediaCardDOM();
        $wrapperGallery.appendChild(cardDOM);
    });

    $wrapper.appendChild($wrapperGallery);
};

async function initPhotographer() {

    // Get Id from URL
    const params = (new URL(document.location)).searchParams;
    const id = parseInt(params.get('id'));

    // Get Data and parse content with the Id
    const { photographers, media } = await getData('./data/photographers.json');
    const photographerData = photographers.filter( user => user.id === id )[0];
    const mediaData = media.filter( media => media.photographerId === id );

    //console.log(mediaData);
    displayPage(photographerData, mediaData);
};

initPhotographer();