// Using Fetch API to get data from a json file
class Api {
    constructor(url) {
        this._url = url;
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .catch(err => console.log('Fetch : an error occurs', err));
    }
}


class PhotographerApi extends Api {
    constructor() {
        super('/data/photographers.json');
    }

    async getData() {
        return await this.get();
    }
}