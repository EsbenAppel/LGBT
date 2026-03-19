document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const form = document.getElementById("signupForm");
  const formMessage = document.getElementById("formMessage");

  function openMenu() {
    if (!burger || !sidebar || !overlay) return;
    burger.classList.add("active");
    sidebar.classList.add("active");
    overlay.classList.add("active");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (!burger || !sidebar || !overlay) return;
    burger.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    if (!sidebar) return;
    if (sidebar.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (burger) {
    burger.addEventListener("click", toggleMenu);

    burger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  if (sidebar) {
    const sidebarLinks = sidebar.querySelectorAll("a");
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fornavn = document.getElementById("fornavn")?.value.trim();
      const efternavn = document.getElementById("efternavn")?.value.trim();
      const email = document.getElementById("email")?.value.trim();

      if (!fornavn || !efternavn || !email) {
        if (formMessage) {
          formMessage.textContent = "Udfyld lige fornavn, efternavn og email";
        }
        return;
      }

      if (formMessage) {
        formMessage.textContent = `Tak for din tilmelding, ${fornavn}!`;
      }

      form.reset();
    });
  }
});