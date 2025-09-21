/* distance generator to run as soon as page loads */
document.addEventListener("DOMContentLoaded", function() {
    runGame();
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
const clubs = [
    {name: "Driver", distance: 230, img: "assets/images/driver.jpg"}
    ];
