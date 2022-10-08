let homeScore = 0;
let guestScore = 0;
let periodScore = 0;
let numHomeFouls = 0;
let numGuestFouls = 0;

let homeScoreEl = document.getElementById("homeScore-el");
let guestScoreEl = document.getElementById("guestScore-el");
let periodScoreEl = document.getElementById("periodScore-el");
let homeFoulsEl = document.getElementById("homeFouls-el");
let guestFoulsEl = document.getElementById("guestFouls-el");

function addOneHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function addTwoHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function addThreeHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function addOneGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function addTwoGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function addThreeGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function increasePeriod() {
    periodScore += 1;
    periodScore = periodScore % 5; // Wraps around to 0 after hitting 4
    periodScoreEl.textContent = periodScore;
}

function incrementHomeFoul() {
    numHomeFouls += 1;
    homeFoulsEl.textContent = numHomeFouls;
}

function incrementGuestFoul() {
    numGuestFouls += 1;
    guestFoulsEl.textContent = numGuestFouls;
}

function newGame() {
    // TODO: Reset the clock timer
    homeScore = 0;
    guestScore = 0;
    periodScore = 0;
    numHomeFouls = 0;
    numGuestFouls = 0;

    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    periodScoreEl.textContent = periodScore;
    homeFoulsEl.textContent = numHomeFouls;
    guestFoulsEl.textContent = numGuestFouls;
}