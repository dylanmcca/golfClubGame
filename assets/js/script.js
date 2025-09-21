/* distance generator to run as soon as page loads */
document.addEventListener("DOMContentLoaded", function() {
    runGame();
    showClubs();
});

/* create and show a random distance for game*/
function runGame() {
    const distance = randInt(1, 500);
    document.getElementById("distance").textContent = distance + " meters";
}

// generate randon distance using Math Random & Math floor methods
function randInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//array for selection of golf clubs
const clubs = [
    {name: "Driver", distance: 230, img: "assets/images/driver2-istock.jpg"},
    {name: "3-wood", distance: 190, img: "assets/images/3-wood-istock.jpg"},
    {name: "5-iron", distance: 160, img: "assets/images/5iron-istock.jpg"},
    {name: "7-iron", distance: 140, img: "assets/images/7iron-istock.jpg"},
    {name: "9-iron", distance: 120, img: "assets/images/9iron-istock.jpg"},
    {name: "Pitch", distance: 100, img: "assets/images/pitching-wedge-istock.jpg"},
    {name: "Sand wedge", distance: 70, img: "assets/images/sandwedge-istock.jpg"},
    {name: "Putter", distance: 15, img: "assets/images/putter-istock.jpg"},

];

//add game variables 
let correctCount = 0;
let incorrectCount = 0;
let attempts = 0;
const maxAttempts = 5;
let targetDistance = 0;


const clubsContainer = document.getElementById("clubs-container");

function showClubs() 
{
    clubs.forEach(club => 
        {
    const btn = document.createElement("button");
    btn.innerHTML = `<img src="${club.img}" alt="${club.name}">
    <span>${club.name}</span>`;
    btn.addEventListener("click", () => checkChoice(club));
    clubsContainer.appendChild(btn);
    });
}
