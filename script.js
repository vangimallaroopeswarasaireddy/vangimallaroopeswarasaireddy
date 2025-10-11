// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.2 });
reveals.forEach(reveal => observer.observe(reveal));

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.toggle-btn').textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}
