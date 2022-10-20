// Get data from url (.json)
async function getData(url) {
    return fetch(url)
            .then((res) => {
                if (res.ok) return res.json()
            })
            .catch((err) => console.log('Erreur fetch', err))
}