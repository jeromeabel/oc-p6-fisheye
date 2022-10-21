class FetchApi {

    static async get(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log('An error occurs', error))
    }
    
}
