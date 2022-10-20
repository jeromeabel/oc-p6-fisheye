function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const $wrapper = document.createElement('article');
        $wrapper.classList.add('card');

        const userCard = `
                <div class="card-header">
                    <a href="photographer.html?id=${id}" arial-label="${name}">
                        <img alt="" src="${picture}">
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