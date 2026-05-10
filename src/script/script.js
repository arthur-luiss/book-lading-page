// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));
 
// ── FORM SUBMIT ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Mensagem enviada ✓';
  btn.style.background = '#00c87a';
  setTimeout(() => {
    btn.textContent = 'Enviar mensagem';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}
 
// ── HEADER SHADOW ON SCROLL ──
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 20
    ? '0 4px 40px rgba(0,0,0,0.4)'
    : 'none';
});