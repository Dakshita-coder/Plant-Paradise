window.addEventListener("DOMContentLoaded", () => {
  const tips = document.querySelectorAll(".tip");
  tips.forEach((tip, index) => {
    tip.style.opacity = "0";
    tip.style.transform = "translateY(40px)";
    setTimeout(() => {
      tip.style.transition = "all 0.6s ease";
      tip.style.opacity = "1";
      tip.style.transform = "translateY(0)";
    }, 200 * index);
  });
});
