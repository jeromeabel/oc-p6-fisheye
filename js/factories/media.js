function mediaFactory(data) {
    const {id, photographerId, title, image, likes, date, price } = data;

    const pictureURL = `assets/media/small/${photographerId}/${image}`;

    function getMediaCardDOM() {
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
    }
}