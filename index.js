let homeScore = 0;
let guestScore = 0;
let periodScore = 1;
let numHomeFouls = 0;
let numGuestFouls = 0;

let homeScoreEl = document.getElementById("homeScore-el");
let guestScoreEl = document.getElementById("guestScore-el");
let periodScoreEl = document.getElementById("periodScore-el");
let homeFoulsEl = document.getElementById("homeFouls-el");
let guestFoulsEl = document.getElementById("guestFouls-el");

// Variables for NBA Game Clock
let nbaGameClockSeconds = 60; 
let nbaGameClockMinutes = 11;

let nbaGamerClockEl = document.getElementById("nbaGameClock"); // Entire timer
let nbaGameClockMinutesEl = document.getElementById("nbaGameClockMinutes"); // Minutes number
let nbaGameClockSecondsEl = document.getElementById("nbaGameClockSeconds"); // Seconds number

var timer = null;
function startClock() {
    if (!timer) { // SUPER IMPORTANT LINE
        /* This essentially prevents user from clicking start button successively and starting
         * multiple timers which makes the countdown go faster. If we don't have this then: 
         * "timer is a local variable that ONLY exists within the particular invocation of your 
         * event handler function. So, when the next event handler is called, that previous 
         * timer no longer exists"
         * Also notice how interestingly in JS we can use the value before even declaring
         * its value.
         * The logical NOT (!) operator (logical complement, negation) takes truth to 
         * falsity and vice versa. 
         * So this line reads as "if timer does not exist then,"
         */
    timer = setInterval(tick, 1000);
    }
} // 1s = 1000ms

function tick() { 
    /* Crucical to note that setInterval takes in the function and 
    * time interval (in milliseconds) at which to run the code as 
    * parameters. 
    */
    nbaGameClockSeconds = nbaGameClockSeconds - 1;
    if (nbaGameClockMinutes == 0 && nbaGameClockSeconds == 0) {
        stopClock()
        /* After running some tests I can confirm that the clear interval takes in the
         * return of setInterval and stops the clock. It also reaches other functions
         * when it is called correctly. 
         */
    }
    else if (nbaGameClockSeconds == -1) { // When it crosses the minute, it has to loop back
        nbaGameClockSeconds = 59;
        nbaGameClockMinutes -= 1;
    }
    nbaGameClockSecondsEl.textContent = (nbaGameClockSeconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    nbaGameClockMinutesEl.textContent = (nbaGameClockMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
};

function resetClock() { // Resetting the values of the clock
    stopClock()
    nbaGameClockSeconds = 60;
    nbaGameClockMinutes = 11;

    nbaGameClockMinutesEl.textContent = 12;
    nbaGameClockSecondsEl.textContent = (0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}

function stopClock() {
    clearInterval(timer);
    timer = null;
}

function highlightLeader() {
    let homeScore = parseInt(homeScoreEl.innerText)
    let guestScore = parseInt(guestScoreEl.innerText)

    if (homeScore > guestScore) {
        homeScoreEl.style.border = "3px solid #FFC72C";
        guestScoreEl.style.border = "3px solid transparent";
    } else if (homeScore == guestScore) {
        homeScoreEl.style.border = "3px solid transparent";
        guestScoreEl.style.border = "3px solid transparent";
    }
    else if (guestScore > homeScore) {
        homeScoreEl.style.border = "3px solid transparent";
        guestScoreEl.style.border = "3px solid #FFC72C";
    }
}

function addOneHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

function addTwoHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

function addThreeHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

function addOneGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function addTwoGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function addThreeGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function increasePeriod() {
    periodScore += 1;
    // Wraps around to 1 after hitting 4
    if (periodScore == 5) {
        periodScore = 1;
    } else {
        periodScore %= 5;
    }
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
    periodScore = 1;
    numHomeFouls = 0;
    numGuestFouls = 0;

    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    periodScoreEl.textContent = periodScore;
    homeFoulsEl.textContent = numHomeFouls;
    guestFoulsEl.textContent = numGuestFouls;

    homeScoreEl.style.border = "3px solid transparent";
    guestScoreEl.style.border = "3px solid transparent";
    resetClock();
}