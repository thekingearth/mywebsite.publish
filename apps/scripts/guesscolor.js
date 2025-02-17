// Guess Collor
const colors = ["Merah", "Hijau", "Biru", "Kuning", "Ungu", "Pink", "Cekelat", "Putih", "Hitam", "Jingga"];
const colorCodes = {
  "Merah": "#f00",
  "Hijau": "#5a1",
  "Biru": "#00f",
  "Kuning": "#ff0",
  "Ungu": "#81b",
  "Pink" : "#f2a",
  "Cekelat" : "#840",
  "Putih" : "#fff",
  "Jingga" : "#f80",
  "Hitam" : "#000"
};

let currentText = "";
let currentColor = "";
let score = 0;
let timeLeft = 3;
let timer;
let isGameOver = false;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setNewChallenge() {
  if (isGameOver) return;
  currentText = getRandomColor();
  currentColor = getRandomColor();
  const colorTextDiv = document.getElementById("colorText");
  colorTextDiv.textContent = currentText;
  colorTextDiv.style.color = colorCodes[currentColor];
  document.getElementById("gameOver").textContent = "";
  document.getElementById("restartButton").style.display = "none";
  document.getElementById("correctButton").style.display = "inline-block";
  document.getElementById("wrongButton").style.display = "inline-block";
  timeLeft = 3;
  updateTimer();
  clearInterval(timer);
  timer = setInterval(countdown, 700);
}

function countdown() {
  timeLeft--;
  updateTimer();
  if (timeLeft <= 0) {
    clearInterval(timer);
    endGame("Waktu habis");
  }
}

function updateTimer() {
  document.getElementById("timer").textContent = `${timeLeft}`;
}

function checkAnswer(isCorrect) {
  if (isGameOver) return;
  clearInterval(timer);
  const correctSound = document.getElementById("correctSound");
  const isMatch = currentText === currentColor;

  if (isCorrect === isMatch) {
    score++;
    document.getElementById("score").textContent = score;
    correctSound.play();
    setNewChallenge();
  } else {
    endGame("Permainan berakhir");
  }
}

function endGame(message) {
  isGameOver = true;
  document.getElementById("gameOver").textContent = `${message} dan skor kamu adalah ${score}`;
  document.getElementById("colorText").style.display = "absolute";
  document.getElementById("timer").textContent = "";
  document.getElementById("restartButton").style.display = "block";
  document.getElementById("correctButton").style.display = "none";
  document.getElementById("wrongButton").style.display = "none";
  const gameOverSound = document.getElementById("gameOverSound");
  gameOverSound.play();
}

function resetGame() {
  isGameOver = false;
  score = 0;
  document.getElementById("score").textContent = score;
  document.getElementById("gameOver").textContent = "";
  setNewChallenge();
}

setNewChallenge();
