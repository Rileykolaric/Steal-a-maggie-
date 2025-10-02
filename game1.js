const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Example: simple player square
let player = { x: 100, y: 100, size: 50, color: 'yellow' };
let speed = 5;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function update() {
  draw();
  requestAnimationFrame(update);
}

update();

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') player.y -= speed;
  if (e.key === 'ArrowDown') player.y += speed;
  if (e.key === 'ArrowLeft') player.x -= speed;
  if (e.key === 'ArrowRight') player.x += speed;
});
