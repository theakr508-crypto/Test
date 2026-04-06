// ================= MENU =================
function toggleMenu() {
    const nav = document.getElementById("nav-links");
    if (nav) nav.classList.toggle("active");
}

// ================= WHATSAPP FORM =================
function sendWhatsApp(e) {
    e.preventDefault();

    let name = document.getElementById("name")?.value || "";
    let phone = document.getElementById("phone")?.value || "";
    let message = document.getElementById("message")?.value || "";

    let url = "https://wa.me/917764944794?text="
        + "Name: " + encodeURIComponent(name)
        + "%0aPhone: " + encodeURIComponent(phone)
        + "%0aMessage: " + encodeURIComponent(message);

    window.open(url, "_blank");
}

// ================= EMAIL =================
function sendEmail() {
    let name = document.getElementById("name")?.value || "";
    let phone = document.getElementById("phone")?.value || "";
    let email = document.getElementById("email")?.value || "";
    let message = document.getElementById("message")?.value || "";

    let mail = "mailto:Dcorporate@rediffmail.com"
        + "?subject=Security Inquiry"
        + "&body="
        + "Name: " + encodeURIComponent(name) + "%0a"
        + "Phone: " + encodeURIComponent(phone) + "%0a"
        + "Email: " + encodeURIComponent(email) + "%0a"
        + "Message: " + encodeURIComponent(message);

    window.location.href = mail;
}

// ================= SLIDER =================
document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("slider");
    const slidesContainer = document.getElementById("slides");
    const dotsContainer = document.getElementById("dots");

    if (!slider || !slidesContainer || !dotsContainer) return;

    const slides = slidesContainer.querySelectorAll("img");
    let index = 0;
    let total = slides.length;
    let autoSlide;

    // CREATE DOTS
    slides.forEach((_, i) => {
        let dot = document.createElement("span");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;

        let dots = dotsContainer.querySelectorAll("span");
        dots.forEach(d => d.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    }

    function moveSlide(step) {
        index = (index + step + total) % total;
        updateSlider();
    }

    function goToSlide(i) {
        index = i;
        updateSlider();
    }

    // AUTO SLIDE
    function startAuto() {
        autoSlide = setInterval(() => moveSlide(1), 3000);
    }

    function stopAuto() {
        clearInterval(autoSlide);
    }

    // PAUSE ON HOVER
    slider.addEventListener("mouseenter", stopAuto);
    slider.addEventListener("mouseleave", startAuto);

    // TOUCH SWIPE
    let startX = 0;

    slider.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) moveSlide(1);
        if (endX - startX > 50) moveSlide(-1);
    });

    // ARROWS (SAFE BIND)
    window.moveSlide = moveSlide;

    // INIT
    updateSlider();
    startAuto();
});
/* SUCCESS POPUP */
function showPopup(){
    const popup = document.getElementById("successPopup");
    if(!popup) return;

    popup.style.display = "block";

    setTimeout(()=>{
        popup.style.display = "none";
    }, 2000);
}

/* UPDATE WHATSAPP */
function sendWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name")?.value || "";
    let phone = document.getElementById("phone")?.value || "";
    let message = document.getElementById("message")?.value || "";

    if(!name || !phone){
        alert("Please fill required fields");
        return;
    }

    showPopup();

    let url = "https://wa.me/917764944794?text="
    + "Name: " + encodeURIComponent(name)
    + "%0aPhone: " + encodeURIComponent(phone)
    + "%0aMessage: " + encodeURIComponent(message);

    setTimeout(()=>{
        window.open(url, "_blank");
    }, 1000);
}
window.addEventListener("scroll",()=>{
    document.querySelectorAll(".reveal").forEach(el=>{
        let top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});