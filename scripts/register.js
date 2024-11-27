// This is the Register script

// NAVBAR
const toggleBtn = document.getElementById("toggleBtn");
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggleBtn.classList.toggle("active");
  navbar.classList.toggle("active")
});

// LOGIN AND REGISTER FUNCTIONALITY
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const login = document.getElementById("login")
const register = document.getElementById("register")

function toggleLogin() {
  login.style.left = "4px"
  register.style.right = "-520px"
}

function toggleRegister() {
  login.style.left = "-510px";
  register.style.right = "5px";
}