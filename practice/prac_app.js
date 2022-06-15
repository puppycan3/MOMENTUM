const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");

const CLASSNAME_HIDDEN = "hidden";
const USERNAME_KEY = "username";
const SAVED_USERNAME = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(CLASSNAME_HIDDEN);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}

if (SAVED_USERNAME === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(SAVED_USERNAME);
}
