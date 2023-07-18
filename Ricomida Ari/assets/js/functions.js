const myCarouselElement = document.querySelector('#my-carousel');

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
$(document).ready(function () {
  $("#boton-correo").on("click", function (event) {
    event.preventDefault();
    alert("Correo enviado");
  })

  $("h4").dblclick(function () {
    $(this).css({
      "color": "red"
    })
  })

  $(".card-title").click(function () {
    $(this).next().toggle("slow")
  })
})

myCarouselElement.addEventListener('slide.bs.carousel', event => {

  document.querySelectorAll(".indicador").forEach(el => {
    el.classList.toggle("active")
  })
})