function toggleMenu() {
  const menu = document.getElementById("navLinks");
  if (menu) {
    menu.classList.toggle("active");
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
});
