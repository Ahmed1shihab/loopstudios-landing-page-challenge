const headerContainer = document.querySelector(".container header");
const humburgerMenu = document.querySelector(".humburger");

humburgerMenu.addEventListener("click", () => {
  headerContainer.classList.toggle("active");
  // humburgerMenu.classList.toggle("open");
});
