function toggleMenu() {
  const menu = document.getElementById("navLinks");
  const btn = document.getElementById("menuBtn");
  if (menu) {
    menu.classList.toggle("active");
  }
  if (btn) {
    btn.classList.toggle("active");
  }
}

function revealOnScroll() {
  const screenHeight = window.innerHeight;
  document.querySelectorAll(".reveal").forEach(element => {
    const top = element.getBoundingClientRect().top;
    if (top < screenHeight - 90) {
      element.classList.add("active");
    }
  });
}

function openPopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.classList.add("active");
  }
}

// Close popup with escape key or close button
function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.classList.remove("active");
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

window.addEventListener("click", event => {
  const popup = document.getElementById("popup");
  if (popup && event.target === popup) {
    popup.classList.remove("active");
  }
  
  // Close mobile navigation drawer if clicking outside the menu button and links
  const menu = document.getElementById("navLinks");
  const btn = document.getElementById("menuBtn");
  if (menu && menu.classList.contains("active") && btn) {
    if (!btn.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("active");
      btn.classList.remove("active");
    }
  }
});
