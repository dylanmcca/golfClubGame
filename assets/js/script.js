/* distance generator to run as soon as page loads */
document.addEventListener("DOMContentLoaded", function() {
    runGame();
    showClubs();
});

/* initial funtion to create and show a random distance for game
function runGame() {
    const distance = randInt(1, 300);
    document.getElementById("distance").textContent = distance + " meters";
}*/

/* changed distance to a global variable (targetDistance) for easier management & club distance comparisons*/ 
function runGame() {
    targetDistance = randInt(1, 450);
    distanceEl.textContent = targetDistance + " meters";
}

// generate randon distance using Math Random & Math floor methods
function randInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//array for selection of golf clubs
const clubs = [
    {name: "Driver", distance: 230, img: "assets/images/driver2-istock.jpg"},
    {name: "3-wood", distance: 210, img: "assets/images/3-wood-istock.jpg"},
    {name: "5-wood", distance: 190, img: "assets/images/5-wood-istock.jpg"},
    {name: "3-iron", distance: 170, img: "assets/images/3iron-istock.jpg"},
    {name: "5-iron", distance: 150, img: "assets/images/5iron-istock.jpg"},
    {name: "7-iron", distance: 135, img: "assets/images/7iron-istock.jpg"},
    {name: "9-iron", distance: 110, img: "assets/images/9iron-istock.jpg"},
    {name: "Pitch", distance: 80, img: "assets/images/pitching-wedge-istock.jpg"},
    {name: "Sand wedge", distance: 60, img: "assets/images/sandwedge-istock.jpg"},
    {name: "Putter", distance: 5, img: "assets/images/putter-istock.jpg"},

];

/* this was a difficult function & I used chatGPT to help me work it out from line 42 to 48 */
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

//add additional game variables 
let correctCount = 0;
let incorrectCount = 0;
let attempts = 0;
const maxAttempts = 5;
let targetDistance = 0;

//add variables to get elements by id to run game
const distanceEl = document.getElementById("distance");
const correctEl =document.getElementById("correct-count");
const incorrectEl = document.getElementById("incorrect-count");
const clubsContainer = document.getElementById("clubs-container");
const restartBtn = document.getElementById("restart");

// club selection vs distance if statements & counters against game max attempts
function checkChoice(club) {
    attempts++;

    const difference = Math.abs(club.distance - targetDistance);
    
    if (difference <= 15) {
        alert(`👍 Good choice! Your ${club.name} landed close to the green (${club.distance}m vs ${targetDistance}m).`);
        correctCount++;
    } else if (club.name === "Driver" && targetDistance > club.distance) {
        alert(`Correct choice 👍 You chose Driver for a long shot of ${targetDistance}m to the green which is the longest club you have.`);
        correctCount++;
    } else if (club.name === "Sand wedge" && targetDistance < club.distance) {
        alert(`Correct choice 👍 You chose Sand wedge for a shorter shot of ${targetDistance}m to the green which is the shortest iron you have in your bag.`);
        correctCount++;
    } else if (club.name === "Putter" && targetDistance < club.distance) {
        alert(`Correct choice 👍 You chose Putter for a very short ${targetDistance}m to the green which is a common choice among golfers when just off the green.`);
        correctCount++;
    }else if (club.distance < targetDistance) {
        alert(`👎 You're short! Your ${club.name} goes ${club.distance}m, but the green is ${targetDistance}m away.`);
        incorrectCount++;
    } else {
        alert(`🤦‍♂️ You're too long! Your ${club.name} goes ${club.distance}m, but the green is only ${targetDistance}m away.`);
        incorrectCount++;
    }
 correctEl.textContent = correctCount;
 incorrectEl.textContent = incorrectCount;
 
 if (attempts < maxAttempts) {
    runGame();
 } else {
    endGame();
 }
}

//end game function runs after max attempts
function endGame() {
    alert(`Game over! You had ${correctCount} correct club selections vs ${incorrectCount} incorrect.`);
}

// restart game function linked to restart button
function restartGame() {
    correctCount = 0;
    incorrectCount = 0;
    attempts = 0;
    correctEl.textContent = correctCount;
    incorrectEl.textContent = incorrectCount;

    clubsContainer.innerHTML = "";
    showClubs();
    runGame();
}
/* restart button eventListener */
restartBtn.addEventListener("click", restartGame);
