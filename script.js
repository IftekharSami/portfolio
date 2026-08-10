// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Scroll Navbar effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("bg-zinc-950/80", "backdrop-blur-xl", "border-b", "border-zinc-800", "py-4");
      navbar.classList.remove("py-6");
    } else {
      navbar.classList.remove("bg-zinc-950/80", "backdrop-blur-xl", "border-b", "border-zinc-800", "py-4");
      navbar.classList.add("py-6");
    }
  });

  // Contact Form Handling
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (formStatus) {
        formStatus.classList.remove("hidden");
        setTimeout(() => {
          contactForm.reset();
        }, 500);
      }
    });
  }
});
