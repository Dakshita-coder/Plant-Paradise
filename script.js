
//  PLANT SEARCH FUNCTIONALITY
const plants = [
  "Aloe Vera",
  "Peace Lily",
  "Snake Plant",
  "Monstera",
  "Bamboo",
  "Money Plant",
  "Tulsi",
  "Lavender",
  "Rose",
  "Fern"
];

const search = document.getElementById("searchInput");
const suggestionBox = document.createElement("ul");
suggestionBox.classList.add("suggestion-box");
search.parentNode.appendChild(suggestionBox);

search.addEventListener("input", () => {
  const input = search.value.toLowerCase();
  suggestionBox.innerHTML = "";
  if (input.length > 0) {
    const filtered = plants.filter(p => p.toLowerCase().includes(input));
    filtered.forEach(f => {
      const li = document.createElement("li");
      li.textContent = f;
      li.onclick = () => {
        search.value = f;
        suggestionBox.innerHTML = "";
      };
      suggestionBox.appendChild(li);
    });
  }
});

// NEWSLETTER FUNCTIONALITY
const newsletterForm = document.querySelector(".newsletter form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector("input").value;
    if (email) {
      alert(`🌱 Thank you for joining, ${email}! Stay tuned for plant care updates.`);
      e.target.reset();
    }
  });
}
// 🌿 Reveal category section on scroll
const categorySection = document.querySelector('.category-section');
window.addEventListener('scroll', () => {
  const sectionPos = categorySection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if (sectionPos < screenPos) {
    categorySection.classList.add('visible');
  }
});

//  SMOOTH SCROLL NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

//  CATEGORY HOVER TOOLTIP
const categories = document.querySelectorAll(".category-card");

categories.forEach(cat => {
  cat.style.position = "relative";

  cat.addEventListener("mouseenter", () => {
    const tip = document.createElement("div");
    tip.className = "tooltip";
    tip.textContent = "Click to explore 🌿";
    cat.appendChild(tip);
  });

  cat.addEventListener("mouseleave", () => {
    const tip = cat.querySelector(".tooltip");
    if (tip) tip.remove();
  });
});
//  GOOGLE SEARCH FUNCTIONALITY
const searchBtn = document.getElementById("searchBtn");

if (search && searchBtn) {
  searchBtn.addEventListener("click", () => {
    const query = search.value.trim();
    if (query) {
      // open Google search for the plant name in a new tab
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}+plant+care+tips`;
      window.open(url, "_blank");
    } else {
      alert("🌱 Please enter a plant name to search!");
    }
  });
  search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
const plants = [
  { name: "Rose", tip: "Needs 6 hrs of sunlight daily", img: "Assets/Roses.jpg" },
  { name: "Tulsi", tip: "Water daily, avoid direct afternoon sun", img: "Assets/tulsi.jpg" },
  {name: "Snake Plant",tip: "Needs minimal water and grows even in low light conditions.",img: "Assets/snakeplant.jpg"},
  {name: "Cactus", tip: "Thrives in bright sunlight and needs watering only once every 10–15 days. Let the soil dry completely before watering again.", img: "Assets/cactus.jpg" },
  { name: "Money Plant", tip: "Grows fast in indirect light", img: "Assets/moneyplant.jpg" }
];
const random = plants[Math.floor(Math.random() * plants.length)];
document.getElementById("plantOfDay").innerHTML = `
  <img src="${random.img}" alt="${random.name}">
  <h3>${random.name}</h3>
  <p>${random.tip}</p>
`;
});

//  BACK TO TOP BUTTON
const backToTop = document.createElement("button");
backToTop.id = "backToTop";
backToTop.textContent = "⬆️";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


