// Constructor Pattern : Photographer Model
class Photographer {

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.city = data.city;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
    }

    get location() { 
        return `${this.city}, ${this.country}`;
    }

    get priceByDay() { 
        return `${this.price}€/jour`;
    }

    get portraitURL() {
        return `assets/portraits/${this.portrait}`;
    }

}