const data = [
{
    "id": 7324238,
    "photographerId": 82,
    "title": "18th Anniversary",
    "image": "Event_18thAnniversary.jpg",
    "likes": 33,
    "date": "2019-06-12",
    "price": 55
},
// {
//     "id": 8328953,
//     "photographerId": 82,
//     "title": "Wooden sculpture of a horse",
//     "video": "Art_Wooden_Horse_Sculpture.mp4",
//     "likes": 24,
//     "date": "2011-12-08",
//     "price": 100
// },
{
    "id": 7502053,
    "photographerId": 82,
    "title": "Triangle Man",
    "image": "Art_Triangle_Man.jpg",
    "likes": 88,
    "date": "2007-05-07",
    "price": 55
},
{
    "id": 8523492,
    "photographerId": 82,
    "title": "Purple Tunnel",
    "image": "Art_Purple_light.jpg",
    "likes": 24,
    "date": "2018-05-05",
    "price": 55
}
]

function initSlideshow() {
    let index = 0;

    const $img = document.querySelector(".slide-img");
    let imgURL = `./assets/media/small/${data[index].photographerId}/${data[index].image}`;
    $img.setAttribute("src", imgURL);

    const prevBtn = document.querySelector(".slide-prev");
    const nextBtn = document.querySelector(".slide-next");

    nextBtn.addEventListener('click', (e) => {
        index++;
        if (index === data.length) {
            index=0;
        }
     imgURL = `./assets/media/small/${data[index].photographerId}/${data[index].image}`;
        console.log(data)
        $img.setAttribute("src", imgURL);
    })

    prevBtn.addEventListener('click', (e) => {
        index--;
        if (index === 0) {
            index = data.length - 1;
        }

         imgURL = `./assets/media/small/${data[index].photographerId}/${data[index].image}`;
        $img.setAttribute("src", imgURL);
    })
    

}

initSlideshow();

/*
    <div class="slideshow">
      <img class="slide-img" src="" alt="">
      <button class="slide-prev"> Prev. </button>
      <button class="slide-next"> Next. </button>
    </div>
    */