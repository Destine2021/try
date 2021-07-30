const img  = document.getElementById("image")
const name  = document.getElementById("name")
const searchInput = document.getElementById('search')
const resultatInput = document.getElementById('resultat')
let countries;
let searchCountries="";

const fetchCountry = async()=> {
    countries = await fetch("https://restcountries.eu/rest/v2/region/africa?&maxResults=10&fields=flag;name;population;capital")
    .then(res=> res.json())
    console.log(countries);
}

const showCountry = async() =>{
    await fetchCountry();
    resultat.innerHTML =(
    countries
    .filter(country => country.name.toLowerCase().includes(searchCountries.toLowerCase()
    ))
    .map(country =>(
`
<div id="card" style="width: 10rem; ">
<img src="${country.flag}" class="card-img-top" alt="...">
<div class="card-body">
  <h6 class="card-title">${country.name}</h6>
  <p class="card-title">Capital: ${country.capital}</p>
  <p class="card-title">Population: ${country.population}</p>
  <a href="./recettes.html" class="btn btn-primary">Taste our food </a>
</div>
</div>
`
 )).join("")

 )
}
showCountry()

//INPUT SET UP
searchInput.addEventListener('input', (e)=>{searchCountries = e.target.value 
showCountry()
})

