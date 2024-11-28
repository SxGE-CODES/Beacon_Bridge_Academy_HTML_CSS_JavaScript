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

// INPUT CONTAINER FOCUS: LOGIN
const focusDiv1 = document.getElementById("focusDiv1");
const inputFocus1 = document.getElementById("inputFocus1");
const focusDiv2 = document.getElementById("focusDiv2");
const inputFocus2 = document.getElementById("inputFocus2");

inputFocus1.addEventListener("focus", () => {
  focusDiv1.style.backgroundColor = "#f1b9b9";
})
inputFocus1.addEventListener("blur", () => {
  focusDiv1.style.backgroundColor = "#fff3cd";
})
inputFocus2.addEventListener("focus", () => {
  focusDiv2.style.backgroundColor = "#f1b9b9";
})
inputFocus2.addEventListener("blur", () => {
  focusDiv2.style.backgroundColor = "#fff3cd";
})

// INPUT CONTAINER FOCUS: LOGIN
const focusDiv3 = document.getElementById("focusDiv3");
const inputFocus3 = document.getElementById("inputFocus3")
const focusDiv4 = document.getElementById("focusDiv4");
const inputFocus4 = document.getElementById("inputFocus4")
const focusDiv5 = document.getElementById("focusDiv5");
const inputFocus5 = document.getElementById("inputFocus5")
const focusDiv6 = document.getElementById("focusDiv6");
const inputFocus6 = document.getElementById("inputFocus6")

inputFocus3.addEventListener("focus", () => {
  focusDiv3.style.backgroundColor = "#f1b9b9";
})
inputFocus3.addEventListener("blur", () => {
  focusDiv3.style.backgroundColor = "#fff3cd";
})
inputFocus4.addEventListener("focus", () => {
  focusDiv4.style.backgroundColor = "#f1b9b9";
})
inputFocus4.addEventListener("blur", () => {
  focusDiv4.style.backgroundColor = "#fff3cd";
})
inputFocus5.addEventListener("focus", () => {
  focusDiv5.style.backgroundColor = "#f1b9b9";
})
inputFocus5.addEventListener("blur", () => {
  focusDiv5.style.backgroundColor = "#fff3cd";
})
inputFocus6.addEventListener("focus", () => {
  focusDiv6.style.backgroundColor = "#f1b9b9";
})
inputFocus6.addEventListener("blur", () => {
  focusDiv6.style.backgroundColor = "#fff3cd";
})

// LOGIN AND REGISTER FUNCTIONALITY
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const login = document.getElementById("loginForm")
const register = document.getElementById("registerForm")

function toggleLogin() {
  login.style.left = "4px"
  register.style.right = "-520px"
}

function toggleRegister() {
  login.style.left = "-510px";
  register.style.right = "500px";
}