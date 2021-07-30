const colors = [
    "green",
    "red",
    "orange",
    "blue",
    "yellow",
    "purple",
 

];

// const colors = [
//    "./images/3.jpg",
//     "./images/5.jpg",
//     "./images/9.jpg",
//     "./images/4.jpg",
// ];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //get random number between 0  and 5
    const random = getRandom()
    console.log(getRandom)
    document.body.style.backgroundColor = colors[random]
    color.textContent = colors[random]
    console.log(document.body)
});

function getRandom(){
    return Math.floor(Math.random() *colors.length);
}