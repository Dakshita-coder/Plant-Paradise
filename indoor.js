// Fade-in animation when plants load
window.addEventListener("DOMContentLoaded", () => {
  const plants = document.querySelectorAll(".plant");
  plants.forEach((plant, index) => {
    plant.style.opacity = "0";
    plant.style.transform = "translateY(40px)";
    setTimeout(() => {
      plant.style.transition = "all 0.6s ease";
      plant.style.opacity = "1";
      plant.style.transform = "translateY(0)";
    }, 200 * index);
  });
});
