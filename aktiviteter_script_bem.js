// ===========================================
// BEM JavaScript - Aktiviteter Filter
// Uses BEM modifier classes: --hidden, --active
// ===========================================

const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  burger.classList.toggle("burger--active");
  sidebar.classList.toggle("sidebar--active");
  overlay.classList.toggle("overlay--active");
}

burger.addEventListener("click", toggleMenu);

overlay.addEventListener("click", toggleMenu);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    burger.classList.remove("burger--active");
    sidebar.classList.remove("sidebar--active");
    overlay.classList.remove("overlay--active");
  }
});

const filterToggle = document.getElementById("filterToggle");
const filterMenu = document.getElementById("filterMenu");
const filterOptions = document.querySelectorAll(".filter__option");
const cards = document.querySelectorAll(".card");

// Toggle filter menu visibility
if (filterToggle && filterMenu) {
  filterToggle.addEventListener("click", () => {
    filterMenu.classList.toggle("filter__menu--hidden");

    const expanded = filterToggle.getAttribute("aria-expanded") === "true";
    filterToggle.setAttribute("aria-expanded", String(!expanded));
  });
}

// Handle filter option selection
filterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedRegion = option.dataset.region;

    // Remove active modifier from all options
    filterOptions.forEach((btn) => btn.classList.remove("filter__option--active"));

    // Add active modifier to selected option
    option.classList.add("filter__option--active");

    // Filter cards based on selected region
    if (selectedRegion === "alle") {
      cards.forEach((card) => {
        card.classList.remove("card--hidden");
      });
    } else {
      cards.forEach((card) => {
        if (card.dataset.region === selectedRegion) {
          card.classList.remove("card--hidden");
        } else {
          card.classList.add("card--hidden");
        }
      });
    }

    // Close the filter menu
    filterMenu.classList.add("filter__menu--hidden");
    filterToggle.setAttribute("aria-expanded", "false");
  });
});

// Close filter menu when clicking outside
document.addEventListener("click", (event) => {
  if (!event.target.closest(".filter__box")) {
    filterMenu.classList.add("filter__menu--hidden");
    filterToggle.setAttribute("aria-expanded", "false");
  }
});
