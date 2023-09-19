let menu = document.querySelector("ul");
let bars = document.querySelector(".header .fa-bars");
let header = document.querySelector(".header");

bars.addEventListener("click", function () {
  menu.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("navbg");
  } else {
    header.classList.remove("navbg");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const animatedImage = document.getElementById("animatedImage");

  animatedImage.style.animationPlayState = "running"; // เริ่มการเคลื่อนไหว
});
