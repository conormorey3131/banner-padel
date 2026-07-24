// ============ Banner Padel — opening soon ============

// Signup form (index.html + contact.html)
// NOTE: this is a front-end placeholder. Point it at your email provider
// (Mailchimp, Brevo, Formspree, etc.) before launch — see README.
const form = document.getElementById("signupForm");
if (form) {
  const note = document.getElementById("signupNote");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if (!name) {
      note.textContent = "Please enter your name.";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      note.textContent = "Please enter a valid email address.";
      return;
    }
    form.innerHTML =
      "<p style='font-family:var(--font-head);font-weight:600;color:var(--yellow);font-size:1.05rem;'>Thanks " +
      name.split(" ")[0].replace(/[<>&]/g, "") +
      " — you're on the list!</p>";
    note.textContent = "We'll be in touch with pre-launch offers and the opening date.";
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
