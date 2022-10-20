function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const $wrapper = document.createElement('article');
        $wrapper.classList.add('card');

        const userCard = `
            <div class="card-img">
                <img alt="Portrait de ${name}" src="${picture}">
            </div>
            <div class="card-body">
                <h2>${name}</h2>
                <p class="card-location">${city}, ${country}</p>
                <p class="card-tagline">${tagline}</p>
                <p>${price}€/jour</p>
            </div>
        `
        $wrapper.innerHTML = userCard;
        return $wrapper;
    }

    return { 
        name, 
        picture, 
        getUserCardDOM 
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