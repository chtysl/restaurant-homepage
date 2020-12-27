import loadPage from "./load";
import homePage from "./home";
import menu from "./menu";
import reservation from "./reservation";

//loading base page
loadPage();
homePage();

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const reservationBtn = document.querySelector(".reservation");

homeBtn.addEventListener("click", () => {
  homePage();
});

menuBtn.addEventListener("click", () => {
  menu();
});

reservationBtn.addEventListener("click", () => {
  reservation();
});
