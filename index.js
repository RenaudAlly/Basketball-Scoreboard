let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("homeScore-el")
let guestScoreEl = document.getElementById("guestScore-el") 

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