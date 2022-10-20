async function displayCards(photographers) {
    const photographersSection = document.querySelector(".photographers");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const cardDOM = photographerModel.getCardDOM();
        photographersSection.appendChild(cardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getData('./data/photographers.json');
    displayCards(photographers);
};

init();
