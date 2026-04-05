//  WHATSAPP FORM
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

    let url = "https://wa.me/97764944794?text="
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
window.addEventListener("load", revealOnScroll); // Trigger on load as well

// ⏳ LOADING SCREEN
function hideLoader() {
    let loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
}

window.addEventListener("load", hideLoader);
document.addEventListener("DOMContentLoaded", hideLoader); // Also hide on DOM ready

// Fallback: hide loader after 3 seconds
setTimeout(hideLoader, 3000);

// NAVIGATION LOADING
document.addEventListener("DOMContentLoaded", () => {
    const pageLinks = document.querySelectorAll('a[href*=".html"]');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            showLoader(href);
        });
    });
});

function showLoader(targetUrl) {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "flex";
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 1000); // 1 second delay
    } else {
        window.location.href = targetUrl;
    }
}
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
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".menu-toggle").classList.toggle("active");
}
