let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

            
function HomeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function HomeTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore

    
}

function HomeThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore

    
}

function GuestOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore

    
}

function GuestTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore

    
}

function GuestThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore

    
}