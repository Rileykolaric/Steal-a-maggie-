let timerInterval;
let timeLeft = 15 * 60; // 15 minutes
const timerDisplay = document.getElementById("timer");

// Switch screens
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function startGame() {
  showScreen("game");
  startTimer();
  initCanvas();
}

function resetGame() {
  clearInterval(timerInterval);
  timeLeft = 15 * 60;
  timerDisplay.textContent = "Time Left: 15:00";
  showScreen("lobby");
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    } else {
      timeLeft--;
      const min = Math.floor(timeLeft / 60);
      const sec = timeLeft % 60;
      timerDisplay.textContent = `Time Left: ${min}:${sec.toString().padStart(2, '0')}`;
    }
  }, 1000);
}

function endGame() {
  showScreen("end");
  document.getElementById("podium").innerHTML = `
    <h3>1st Place: +50 Coins</h3>
    <h3>2nd Place: +25 Coins</h3>
    <h3>3rd Place: +15 Coins</h3>
  `;
}

// --- GAME CANVAS ---
function initCanvas() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  let player = { x: 100, y: 100, size: 30, color: "blue" };

  function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
  }

  // Controls
  window.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") player.y -= 10;
    if (e.key === "ArrowDown") player.y += 10;
    if (e.key === "ArrowLeft") player.x -= 10;
    if (e.key === "ArrowRight") player.x += 10;
    update();
  });

  update();
}
