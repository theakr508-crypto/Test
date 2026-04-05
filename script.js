// 📱 MOBILE MENU TOGGLE
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}

// 📩 WHATSAPP FORM
function handleContact(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service") ? document.getElementById("service").value : "";
    let message = document.getElementById("message").value;

    if (name === "" || phone === "") {
        alert("Please fill required fields");
        return;
    }

    let url = "https://wa.me/91XXXXXXXXXX?text="
        + "Name: " + name + "%0a"
        + "Phone: " + phone + "%0a"
        + (email ? "Email: " + email + "%0a" : "")
        + (service ? "Service: " + service + "%0a" : "")
        + "Requirement: " + message;

    window.open(url, "_blank");

    // SUCCESS POPUP
    let popup = document.getElementById("successPopup");
    if (popup) {
        popup.style.display = "block";

        setTimeout(() => {
            popup.style.display = "none";
        }, 3000);
    }

    // RESET FORM
    document.querySelector("form").reset();
}

// 📧 EMAIL BUTTON
function sendEmail() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mail = "mailto:your@email.com"
        + "?subject=Security Service Inquiry"
        + "&body="
        + "Name: " + name + "%0a"
        + "Phone: " + phone + "%0a"
        + "Email: " + email + "%0a"
        + "Requirement: " + message;

    window.location.href = mail;
}

// ✨ SCROLL ANIMATION
function revealOnScroll() {
    let elements = document.querySelectorAll(".reveal");

    elements.forEach((el) => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// ⏳ LOADING SCREEN
window.addEventListener("load", () => {
    let loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});
function sendEmail() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mail = "mailto:Dcorporate@rediffmail.com"
        + "?subject=Security Service Inquiry"
        + "&body="
        + "Name: " + name + "%0a"
        + "Phone: " + phone + "%0a"
        + "Email: " + email + "%0a"
        + "Requirement: " + message;

    window.location.href = mail;
}
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}