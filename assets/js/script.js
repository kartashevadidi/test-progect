window.addEventListener("scroll", () => {
  const posY = window.scrollY;
  const header = document.querySelector("header");

  if (posY > 150 && header.style.backgroundColor !== "darkslategray") {
    header.style.backgroundColor = "darkslategray";
  }
  if (posY < 151 && header.style.backgroundColor === "darkslategray") {
    header.style.backgroundColor = "transparent";
  }
});

// slider
let swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
});