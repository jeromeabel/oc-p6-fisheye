class PhotographerFactory {
    constructor(data) {
        this.data = data;
        this.cardTemplate = new PhotographerCard(this.data);

        // this.name = data.name;
        // this.id = data.id;
        // this.city = data.city;
        // this.country = data.country;
        // this.tagline = data.tagline;
        // this.price = data.price;
        // this.portrait = data.portrait;
    }

    createPortrait() {
        return this.cardTemplate.create();
    }


}