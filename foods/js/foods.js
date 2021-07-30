//JE SOUHAITERAIs FETCH LES VIDEO PRESENTE DANS CETTE API et les afficher comme les cartes de COUNTRIES

// 1) METHODE1 getElementById  and FETCH JAVASCRIPT

const searchInput = document.getElementById('search')
const resultatInput = document.getElementById('resultat')
let foods;
let searchFoods = "";

const fetchVideos = async () => {
  foods = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAQkgr485aWEwosP_TeNu2Hvo3VFUiX6Gc&maxResults=10&type=video&q=congolesefoods&regionCode=CG")
    .then(res => res.json())
  console.log(foods);
}

const showFoods = async () => {
  await fetchFoods();
  resultat.innerHTML = (
    foods
      .filter(foodsVideo => foodsVideo.name.toLowerCase().includes(searchFoods.toLowerCase()
      ))
      .map(foodsVideo => (
        `
     <div id="card" style="width: 10rem; ">
    <img src="${result[0].videoId}" class="card-img-top" alt="...">
    <div class="card-body">
     <h6 class="card-title">${result[0].title}</h6>
     <p class="card-title">Population:  ${result[0].description}</p>
     </div>
   </div>
    `
    )).join("")

    )
   }
   showFoods()
   
   //INPUT SET UP
   searchInput.addEventListener('input', (e)=>{searchFoods = e.target.value 
   showFoods()
   })
   

// OPTION1 AVEC LA REQUETE REQUEST

// var request = require('request');
// const API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAQkgr485aWEwosP_TeNu2Hvo3VFUiX6Gc&maxResults=10&type=video&q=congolesefoods&regionCode=CG"
// request.get(API, function (err, res, body) {

// var result = JSON.parse(body);
//     console.log("title :", result[0].title);
//     console.log("description :", result[0].description);
//     console.log( result[0].videoId);
//     console.log(err);
//     console.log(res.statusCode);
//     console.log(body);

//     `
// <div id="card" style="width: 10rem; ">
// <img src="${result[0].videoId}" class="card-img-top" alt="...">
// <div class="card-body">
//   <h6 class="card-title">${result[0].title}</h6>
//   <p class="card-title">Capital: ${country.capital}</p>
//   <p class="card-title">Population:  ${result[0].description}</p>
//   </div>
// </div>
// ` 
// });
