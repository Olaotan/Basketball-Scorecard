
let homeScore = 0
const homeScoreBoard = document.getElementById("score-home")
const oneHome = document.getElementById("one-home")
const twoHome = document.getElementById("two-home")
const threeHome = document.getElementById("three-home")

let guestScore = 0
const guestScoreBoard = document.getElementById("score-guest")
const oneGuest = document.getElementById("one-guest")
const twoGuest = document.getElementById("two-guest")
const threeGuest = document.getElementById("three-guest")

const resetBtn = document.getElementById("reset-btn")


oneHome.addEventListener("click", function(){
    homeScore += 1
    homeScoreBoard.textContent = homeScore
    compareScores()
})

twoHome.addEventListener("click", function(){
    homeScore += 2
    homeScoreBoard.textContent = homeScore
    compareScores()
})

threeHome.addEventListener("click", function(){
    homeScore += 3
    homeScoreBoard.textContent = homeScore
    compareScores()
})


oneGuest.addEventListener("click", function(){
    guestScore += 1
    guestScoreBoard.textContent = guestScore
    compareScores()
})

twoGuest.addEventListener("click", function(){
    guestScore += 2
    guestScoreBoard.textContent = guestScore
    compareScores()
})

threeGuest.addEventListener("click", function(){
    guestScore += 3
    guestScoreBoard.textContent = guestScore
    compareScores()
})


resetBtn.addEventListener("click", function(){
    homeScore = 0
    guestScore = 0
    homeScoreBoard.textContent = homeScore
    guestScoreBoard.textContent = guestScore
})

function compareScores(){
    if (homeScore > guestScore){
        homeScoreBoard.classList.add("higherScore")
        guestScoreBoard.classList.remove("higherScore")
    } else if (guestScore > homeScore){
        guestScoreBoard.classList.add("higherScore")   
        homeScoreBoard.classList.remove("higherScore")     
    } else {
        guestScoreBoard.classList.remove("higherScore")   
        homeScoreBoard.classList.remove("higherScore")         
    }
}