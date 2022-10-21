function mediaFactory(data) {
    const {id, photographerId, title, likes, date, price } = data;

    const pictureURL = `./assets/media/small/${photographerId}/${image}`;

    function getMediaCardDOM(type) {

        // if (type === "image") return getMediaImageDOM(title, data.image);
        // else if (type === "video") return getMediaVideoDOM(title, data.video);
        // else {
        //  throw "Invalid type"
        // }

        // noeuds ou innerHTML ?

        const $wrapper = document.createElement('div');
        $wrapper.classList.add('card-img');

        const card = `
            <img class="img-squared" alt="" src="${pictureURL}">
            <h2>${title}</h2>
        `
        $wrapper.innerHTML = card;
        return $wrapper;
        
    }

    return {
        getMediaCardDOM,
        //....
    }
}



function getMediaImageDOM(title, image) {

}

function getMediaVideoDOM(title , video) {

}