const acordeon = document.querySelectorAll(".content");

acordeon.forEach((element) => {
  element.addEventListener("click", () => {
    element.querySelector(".answer").classList.toggle("open");
    element.querySelector(".desplegable").classList.toggle("active");
    element.querySelector(".flecha-content ").classList.toggle("up");
  });
});
