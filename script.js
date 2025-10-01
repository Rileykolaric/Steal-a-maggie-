// Example placeholder: clicking "Base" alerts the feature
document.querySelectorAll('.base a').forEach(base => {
  base.addEventListener('click', (e) => {
    alert("Entering " + e.target.innerText + " ... (game not fully built yet)");
  });
});
