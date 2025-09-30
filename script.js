
const gameArea = document.getElementById("game-area");

// Example brainrot names
const brainrots = ["Maggie Bobobear", "Toothpick Tim", "Goofy Grape", "Lulu Popcorn", "Bobby Bubble", "CheeseStick"];

// Generate 6 bases
for (let i = 1; i <= 6; i++) {
  const base = document.createElement("div");
  base.classList.add("base");
  base.innerHTML = `
    <div class="username">Player${i}</div>
    <p>Base ${i}</p>
    <div class="slots"></div>
  `;
  gameArea.appendChild(base);

  // Add 12 slots for brainrots
  const slots = base.querySelector(".slots");
  for (let j = 0; j < 12; j++) {
    const slot = document.createElement("div");
    slot.textContent = brainrots[Math.floor(Math.random() * brainrots.length)];
    slot.style.fontSize = "12px";
    slot.style.margin = "2px";
    slots.appendChild(slot);
  }
}
