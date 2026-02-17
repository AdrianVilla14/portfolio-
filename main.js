// Typing Animation
const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const textArray = [
"Web Development",
"UI/UX Design",
"Teaching & Mentoring",
"Problem Solving",
"Technical Writing"
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
function type() {
if (charIndex < textArray[textArrayIndex].length) {
typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
charIndex++;
setTimeout(type, typingDelay);
} else {
setTimeout(erase, newTextDelay);
}
}
function erase() {
if (charIndex > 0) {
typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
charIndex--;
setTimeout(erase, erasingDelay);
} else {
textArrayIndex++;
if (textArrayIndex >= textArray.length) textArrayIndex = 0;
setTimeout(type, typingDelay + 500);
}
}
document.addEventListener("DOMContentLoaded", function() {
if (textArray.length) setTimeout(type, newTextDelay + 250);
});
// Smooth Scroll Reveal (optional enhancement)
const observerOptions = {
threshold: 0.1,
rootMargin: "0px 0px -100px 0px"
};
const observer = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}
});
}, observerOptions);
document.querySelectorAll('.about-card, .skill-category, .project-card, .cert-card, .writing-card').forEach(el => {
el.style.opacity = "0";
el.style.transform = "translateY(30px)";
el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
observer.observe(el);
});
// Certificate Modal
const certModal = document.getElementById("certModal");
const certModalImg = document.getElementById("certModalImg");
const closeModal = document.getElementById("closeModal");
const certImgs = document.querySelectorAll(".cert-img.clickable");
const captionDiv = certModal.querySelector('.caption');
certImgs.forEach(img => {
img.onclick = function() {
certModal.style.display = "block";
certModalImg.src = this.src;
certModalImg.alt = this.alt;
captionDiv.textContent = this.alt;
}
});
closeModal.onclick = function() {
certModal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == certModal) {
certModal.style.display = "none";
}
}
// Download Certificates Function
function downloadCertificates() {
const files = [
{
url: 'Adrian N.pdf',
name: 'Adrian_Nunez_CTAE_Student_of_the_Month.pdf'
},
{
url: "Adrian_Villa314's profile _ Codecademy.pdf",
name: 'Adrian_Nunez_Codecademy_Profile.pdf'
}
];
files.forEach(f => {
    const a = document.createElement('a');
    a.href = f.url;
    a.download = f.name;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

}
// Navbar scroll effect (optional)
let lastScroll = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset;
if (currentScroll <= 0) {
    navbar.style.boxShadow = 'none';
} else {
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
}

lastScroll = currentScroll;

});

// Mobile nav toggle and accessibility
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        mainNav.classList.toggle('open');
    });

    // Close menu when a nav link is clicked (mobile)
    mainNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close on escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('open')) {
            mainNav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    });

    // Ensure menu is closed when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 880 && mainNav.classList.contains('open')) {
            mainNav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}