const menuTogglerBtn = document.getElementById("menu-toggler-btn");
const menuBtnIcon = document.getElementById("menu-btn-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuTogglerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("d-flex");
  if (mobileMenu.classList.contains("d-flex")) {
    menuBtnIcon.classList.remove("ri-menu-2-line");
    menuBtnIcon.classList.add("ri-close-large-line");
  } else {
    menuBtnIcon.classList.remove("ri-close-large-line");
    menuBtnIcon.classList.add("ri-menu-2-line");
  }
});
