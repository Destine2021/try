//JE SOUHAITERAIs FETCH LES VIDEO PRESENTE DANS CETTE API et les afficher comme les cartes de COUNTRIES

// 1) METHODE1 getElementById  and FETCH JAVASCRIPT

const searchInput = document.getElementById('search')
const resultatInput = document.getElementById('resultat')
let foods;
let searchFoods = "";

const fetchVideos = async (channelId) => {
  const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=20&key=AIzaSyAQkgr485aWEwosP_TeNu2Hvo3VFUiX6Gc`)
  const foods = await data.json()
  return foods
  console.log(foods);
}
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
searchInput.addEventListener('input', (e)=>{searchFoods = e.target.value 
  showFoods()
  })