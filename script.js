// ============ Banner Padel — interactions ============

// Sticky nav background on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 30);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  burger.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  })
);

// Scroll-reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Signup form
// NOTE: this is a front-end placeholder. Point it at your email provider
// (Mailchimp, Brevo, Formspree, etc.) before launch — see README.
const form = document.getElementById("signupForm");
const note = document.getElementById("signupNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    note.textContent = "Please enter a valid email address.";
    return;
  }
  form.innerHTML = "<p style='font-family:var(--font-head);font-weight:600;color:var(--navy);font-size:1.1rem;'>You're on the list! See you on court. 🎾</p>";
  note.textContent = "We'll be in touch with pre-launch offers and the opening date.";
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
