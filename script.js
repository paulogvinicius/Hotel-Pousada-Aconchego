function contatoWhats() {
  const numero = "5567999981305";
  const mensagem = "Olá, vim do site. Quero fazer uma reserva.";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

/* ANIMAÇÃO AO ROLAR */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 50) {
      el.classList.add("active");
    }
  });
}

/* 🔥 CORREÇÃO AQUI */
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // <- resolve o problema

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto-play de 4 segundos
setInterval(() => {
    changeSlide(1);
}, 4000);