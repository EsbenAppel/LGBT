const filterToggle = document.getElementById("filterToggle");
const filterMenu = document.getElementById("filterMenu");
const filterOptions = document.querySelectorAll(".filter-option");
const activityCards = document.querySelectorAll(".activity-card");

if (filterToggle && filterMenu) {
  filterToggle.addEventListener("click", () => {
    filterMenu.classList.toggle("hidden");

    const expanded = filterToggle.getAttribute("aria-expanded") === "true";
    filterToggle.setAttribute("aria-expanded", String(!expanded));
  });
}

filterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedRegion = option.dataset.region;

    filterOptions.forEach((btn) => btn.classList.remove("active"));
    option.classList.add("active");

    if (selectedRegion === "alle") {
      activityCards.forEach((card) => {
        card.classList.remove("hidden-card");
      });
    } else {
      activityCards.forEach((card) => {
        if (card.dataset.region === selectedRegion) {
          card.classList.remove("hidden-card");
        } else {
          card.classList.add("hidden-card");
        }
      });
    }

    filterMenu.classList.add("hidden");
    filterToggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".filter-box")) {
    filterMenu.classList.add("hidden");
    filterToggle.setAttribute("aria-expanded", "false");
  }
});