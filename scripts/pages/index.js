async function getPhotographers(url) {
    return fetch(url)
    .then((res) => {
        if (res.ok) return res.json()
    })
    .catch((err) => console.log('Erreur fetch', err))
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers('./data/photographers.json');
    displayData(photographers);
};

init();
