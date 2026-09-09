const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Thanks! Your message has been captured in this demo. Connect a form backend to receive submissions.";
  form.reset();
});
