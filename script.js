// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
  });
}

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Gallery images
const images = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80"
];

let currentImage = 0;

function showImage(index) {
  const galleryImage = document.getElementById("gallery-image");
  if (galleryImage) {
    galleryImage.src = images[index];
  }
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}

// Initialize gallery
document.addEventListener("DOMContentLoaded", () => {
  showImage(currentImage);
});

// Contact form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "green";
    }
  });
}


