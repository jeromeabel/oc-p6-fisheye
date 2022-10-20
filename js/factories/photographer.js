function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getCardDOM() {
        const $wrapper = document.createElement('article');
        $wrapper.classList.add('card');

        const card = `
                <div class="card-header">
                    <a href="photographer.html?id=${id}" arial-label="${name}">
                        <img class="img-rounded" alt="" src="${picture}">
                        <h2>${name}</h2>
                    </a>
                </div>
                <div class="card-body">
                    <p>
                        <span class="card-location">${city}, ${country}</span>
                        <span class="card-tagline">${tagline}</span>
                        <span class="card-price">${price}€/jour</span>
                    </p>
                </div>
        `
        $wrapper.innerHTML = card;
        return $wrapper;
    }

    function getPageHeaderDOM() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('photograph-header');
        const header = `
                <div class="photograph-heading">
                    <h1>${name}</h1>
                    <p>${city}, ${country}</p>
                    <p>${tagline}</p>
                </div>
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                <img class="img-rounded" src="${picture}" alt="">
        `
        $wrapper.innerHTML = header;
        return $wrapper;
    }

    function getPageFilterDOM() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('photograph-filter');
        const filter = "Trier";
        $wrapper.innerHTML = filter;
        return $wrapper;
    }

    function getPageGalleryDOM() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('photograph-gallery');
        const gallery = "gallery";
        $wrapper.innerHTML = gallery;
        return $wrapper;
    }

    return { 
        name, 
        picture, 
        getCardDOM,
        getPageHeaderDOM,
        getPageFilterDOM,
        getPageGalleryDOM
    }
}

/*
Backup
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}`;
        const p = document.createElement( 'p' );
        p.textContent = tagline;
        const p2 = document.createElement( 'p' );
        p2.textContent =`${price}€/jour`;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p2);
        return (article);
    }
*/