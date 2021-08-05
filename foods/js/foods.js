//JE SOUHAITERAIs FETCH LES VIDEO PRESENTE DANS CETTE API et les afficher comme les cartes de COUNTRIES

// 1) METHODE1 getElementById  and FETCH JAVASCRIPT

const searchInput = document.getElementById('search')
const resultatInput = document.getElementById('resultat')
let params = (new URL(document.location)).searchParams;
let name = params.get("country.name");
let foods;
let foodsId;
let searchFoods = "";

//ETAPE1 FETCH API CHANNEL ID

const fetchId = async () => {
  const donnee = await fetch(`http://localhost:3000/countries`)
  const dataId = await donnee.json()
  console.log(dataId);
  if (name === dataId) {
    return (
   fetchVideos = async () => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${channelId}&key=AIzaSyDcUz4mhHqab2SO54iz-UxfARTIxgsPnYc`)
        // const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=recette%20de%20cuisine%20%20cote%20d%27ivoire&key=AIzaSyDcUz4mhHqab2SO54iz-UxfARTIxgsPnYc`)
        const foods = await data.json()
        console.log(foods);
      }
    )
  }
}
// var fetchVideos = async () => {
//   const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${dataId.channelId}&key=AIzaSyDcUz4mhHqab2SO54iz-UxfARTIxgsPnYc`)
//   // const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=recette%20de%20cuisine%20%20cote%20d%27ivoire&key=AIzaSyDcUz4mhHqab2SO54iz-UxfARTIxgsPnYc`)
//   const foods = await data.json()
//   return foods
//   console.log(foods);
// }
const showFoods = async () => {
  const foods = await fetchVideos();
  console.log(foods.items)
  resultat.innerHTML = (
    foods.items
      //.filter(foodsVideo => foodsVideo.name.toLowerCase().includes(searchFoods.toLowerCase()
      //))
      .map(foodsVideo => (
        `
      <div id="frame" style="width: 10rem; ">
      <iframe width="420" height="315"
src=https://www.youtube.com/embed/${foodsVideo.id.videoId} >
</iframe>
             <div class="card-body">
          <h6 class="card-title">${foodsVideo.snippet.channelTitle}</h6>
          <p class="card-title"> ${foodsVideo.snippet.description}</p>
        </div>
      </div>
    `
      )).join("")
  )
}
showFoods()

//INPUT SET UP
searchInput.addEventListener('input', (e) => {
  searchFoods = e.target.value
  showFoods()
})