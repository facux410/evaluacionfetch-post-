export const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  let nombre = document.getElementsByClassName("Nombre1");
  let email = document.getElementsByClassName("Email1");
  let password = document.getElementsByClassName("Password1");
  const objeto = {
    name: nombre.value,
    email: email.value,
    password: password.value,
  };

  try {
    const resp = await fetch(
      "https://tiendavirtualmern.herokuapp.com/api/users",
      {
        method: "POST",
        body: JSON.stringify(objeto),
        headers: { "content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error);
  }
});
