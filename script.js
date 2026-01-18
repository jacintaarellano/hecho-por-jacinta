console.log("JS conectado");

const slides = document.querySelectorAll(".slide");
let index = 0;

if (slides.length > 0) {
  slides[0].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}
