// This is the About script

// RESPONSIVE TOGGLER
let toggleBtn = document.getElementById("toggleBtn");
let menu = document.getElementById("menu");
let navbar = document.getElementsByTagName("nav")
let navBrand = document.getElementById("navBrand")

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active")
  menu.classList.toggle("active")
  navBrand.classList.toggle("active")
})