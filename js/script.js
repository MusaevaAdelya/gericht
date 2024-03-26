var swiper = new Swiper(".gallery__swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
});

let burger = document.querySelector(".navbar__burger");
let menuMobile = document.querySelector(".navbar--mobile");

burger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menuMobile.classList.contains("hideMenu")) {
    menuMobile.classList.remove("hideMenu");
    burger.classList.remove("bi-list");
    burger.classList.add("bi-x-lg");
    document.body.classList.add("disable-scrolling");
  } else {
    menuMobile.classList.add("hideMenu");
    burger.classList.remove("bi-x-lg");
    burger.classList.add("bi-list");
    document.body.classList.remove("disable-scrolling");
  }
}
