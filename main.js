import { useAsynclogin } from "./controller/login";
import { formulario, useAsyncregister } from "./controller/register";

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// const signupEmail = document.getElementsByClassName("Email1");
// const signupPassword = document.getElementsByClassName("Password1");
// const signupName = document.getElementsByClassName("Nombre1");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function main() {
  useAsyncregister();
  useAsynclogin();
  formulario();
}

main();
