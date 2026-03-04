// Hamburger menu
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  mainNav.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      document.body.classList.remove("nav-open");
    }
  });
}

// Lightbox galerie
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxClose = document.querySelector(".lightbox-close");

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target instanceof HTMLImageElement && target.closest(".gallery-item")) {
    const fullSrc = target.dataset.full || target.src;
    if (lightbox && lightboxImage) {
      lightboxImage.src = fullSrc;
      lightboxImage.alt = target.alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    }
  }

  if (target === lightboxClose || target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  const img = lightbox.querySelector("img");
  if (img) img.src = "";
}

// Rok ve footeru
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}