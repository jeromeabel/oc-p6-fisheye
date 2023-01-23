// Static class
// Using Fetch API to get data from the json file

class PhotographerApi {
  static async getData() {
    const url = './data/photographers.json';
    return fetch(url)
      .then(res => res.json())
      .catch(err => console.log('Fetch : an error occurs', err));
  }
}