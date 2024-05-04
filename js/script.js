
// Selecciona todos los elementos de menú dentro de la lista
const menuItems = document.querySelectorAll(".menu li a");

// Agrega un controlador de eventos clic a cada elemento de menú
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    // Oculta el menú al hacer clic en una opción de menú
    document.querySelector(".menu").classList.remove("show");
  });
});

// Agrega el controlador de eventos clic al botón de menú
document.querySelector(".toggle-menu").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("show");
});

ScrollReveal().reveal('.about p', { delay: 500 });
ScrollReveal().reveal('.card', { delay: 400 });
ScrollReveal().reveal('.contact-form', { delay: 500 });