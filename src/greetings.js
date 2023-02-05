const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const h1 = document.querySelector("#greeting");

const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(info) {
  info.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintH1(username);
}

function paintH1(username) {
  const date = new Date();

  if (date.getHours() > 18 || date.getHours() < 5) {
    h1.innerText = `Good Night!!! ${username}`;
  } else if (date.getHours() > 12) {
    h1.innerText = `Good Afternoon!!! ${username}`;
  } else {
    h1.innerText = `Good Morning!!! ${username}`;
  }
  h1.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintH1(savedUsername);
}
