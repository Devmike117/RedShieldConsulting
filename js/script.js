// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Desplazamiento suave al hacer clic en los enlaces del navbar
  document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Alerta de envío de formulario de contacto
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Gracias por tu mensaje. Te contactaremos pronto.");
      form.reset();
    });
  }
});
