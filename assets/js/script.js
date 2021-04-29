// header
const burgerEl = document.querySelector(".header__burger");
const menuWrapEl = document.querySelector(".header__menu-wrap");

burgerEl.addEventListener("click", function (event) {
  menuWrapEl.classList.toggle("header__menu-wrap_visible");
});

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
let swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
});

const contactsFormEl = document.querySelector(".contacts__form");
const formEmailEl = document.querySelector(".form-input[name=email]");
const formNameEl = document.querySelector(".form-input[name=name]");

const emailRegEx = /^[a-zA-Z0-9.!'_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRegEx = /^[A-z]{3,}$/;

contactsFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  let isMailChecked = emailRegEx.test(formEmailEl.value);
  let isNameChecked = nameRegEx.test(formNameEl.value);

  !isMailChecked
    ? formEmailEl.classList.add("error")
    : formEmailEl.classList.remove("error");

  !isNameChecked
    ? formNameEl.classList.add("error")
    : formNameEl.classList.remove("error");
});

const switchThemeEl = document.querySelector(".switch input");
const htmlEl = document.querySelector("html");

switchThemeEl.addEventListener("click", function (event) {
  event.stopPropagation;
  htmlEl.dataset.mode === "dark"
    ? (htmlEl.dataset.mode = "")
    : (htmlEl.dataset.mode = "dark");

  htmlEl.dataset.mode === "dark"
    ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', '');

  
});

(function() {
  htmlEl.dataset.mode = localStorage.getItem("theme")
})()

