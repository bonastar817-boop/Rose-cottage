function toggleMode() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
};


function toggleMenu() {
    z
    document.getElementById("navLinks").classList.toggle("show");
}



// Typing effect for motto
const motto = "Excellence In Foundation Learning🎓🧠";
let i = 0;
const mottoEl = document.getElementById("hero-motto");

function typeMotto() {
    if (i < motto.length) {
        mottoEl.innerHTML += motto.charAt(i);
        i++;
        setTimeout(typeMotto, 120);
    }
}
window.addEventListener("load", typeMotto);


const heroImages = [
    "Images/2.jpg",
    "Images/8.jpg",
    "Images/Hero.jpg"
];
let imgIndex = 0;
const hero = document.querySelector(".hero");

setInterval(() => {
    imgIndex = (imgIndex + 1) % heroImages.length;
    hero.style.backgroundImage = `url('${heroImages[imgIndex]}')`;
}, 5000); // changes every 5 seconds


const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});


const admissionForm = document.getElementById("admissionForm");
const formMessage = document.getElementById("formMessage");

admissionForm.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    // simple validation (HTML required handles most)
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const grade = document.getElementById("grade").value;

    if (!name || !email || !grade) {
        formMessage.style.color = "#f87171"; // red
        formMessage.textContent = "Please fill out all required fields!";
        return;
    }

    // success message
    formMessage.style.color = "#34d399"; // green
    formMessage.textContent = "Form submitted successfully! We will contact you soon.";

    // reset form after 2 seconds
    setTimeout(() => {
        admissionForm.reset();
        formMessage.textContent = "";
    }, 2000);
});


const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});