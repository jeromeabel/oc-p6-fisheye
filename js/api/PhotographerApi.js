// Get Photographers Data with Fetch API
class PhotographerApi {

    static async get() {
        const url = '/data/photographers.json';
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log('PhotographerApi : an error occurs', error))
    }
    
}
