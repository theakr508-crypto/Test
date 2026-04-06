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
// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1500);
});
function toggleOptions() {
  const box = document.getElementById("optionsBox");

  if (box.style.display === "flex") {
    box.style.display = "none";
  } else {
    box.style.display = "flex";
  }
}
function toggleOptions() {
  document.getElementById("optionsBox").classList.toggle("show");
}
function openPopup() {
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

// CLOSE ON OUTSIDE CLICK
window.addEventListener("click", function(e) {
  const popup = document.getElementById("popup");

  if (e.target === popup) {
    popup.classList.remove("active");
  }
});
