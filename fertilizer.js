window.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".plant");
  items.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    setTimeout(() => {
      item.style.transition = "all 0.6s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, 200 * index);
  });
});
