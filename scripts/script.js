// This is the Homepage Script

const toggleBtn = document.getElementById("toggleBtn");
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggleBtn.classList.toggle("active");
  navbar.classList.toggle("active")
});