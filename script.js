// Scroll Reveal (optional)
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.project');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      reveals[i].style.opacity = '1';
      reveals[i].style.transform = 'translateY(0)';
    }
  }
});

document.querySelectorAll('.project').forEach(p => {
  p.style.opacity = 0;
  p.style.transform = 'translateY(40px)';
  p.style.transition = '0.6s ease';
});
