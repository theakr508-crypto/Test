// MENU TOGGLE
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// SCROLL ANIMATION (FIXED)
const reveals = document.querySelectorAll(".reveal");
const galleryImages = document.querySelectorAll(".gallery img");

function revealOnScroll() {
  const screenHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < screenHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });

  galleryImages.forEach(img => {
    const top = img.getBoundingClientRect().top;

    if (top < screenHeight - 100) {
      img.style.opacity = "1";
      img.style.transform = "translateY(0)";
    }
  });
}

// RUN ON SCROLL
window.addEventListener("scroll", revealOnScroll);

// ⚡ IMPORTANT: RUN ON PAGE LOAD ALSO
window.addEventListener("load", revealOnScroll);
