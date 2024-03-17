const squares = document.querySelectorAll('.square')
const ship = document.querySelector('.ship')
const timeLeft = document.querySelector('#time-left')
const scoreDisplay = document.querySelector('#score')
const backButton = document.querySelector('#back-button')
const restartButton = document.querySelector('#restart-button')

let result = 0
let hitPosition
let currentTime = 15
let timerId = null
let highScore = localStorage.getItem('highScore') || 0

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('ship')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('ship')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      scoreDisplay.textContent = result

      if (result > highScore) {
        highScore = result
        localStorage.setItem('highScore', highScore)
      }

      hitPosition = null
    }
  })
})

function moveShip() {
  timerId = setInterval(randomSquare, 500)
}

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result + '. High Score: ' + highScore)
  }
}

function restartGame() {
  result = 0
  currentTime = 15
  scoreDisplay.textContent = result
  timeLeft.textContent = currentTime
  restartButton.disabled = false
  countDownTimerId = setInterval(countDown, 1000)
}

let countDownTimerId

document.addEventListener('DOMContentLoaded', function() {
  const highScoreDisplay = document.getElementById('high-score')
  const highScore = localStorage.getItem('highScore') || 0

  highScoreDisplay.textContent = highScore
});

backButton.addEventListener('click', function() {
  window.location.href = 'index3.html'
});

restartButton.addEventListener('click', function() {
  if (timerId === null) {
    restartGame()
    moveShip()
    countDown()
  }
})
