const objeto = {
  name: " signupName",
  email: "signup@Emailx",
  password: "signupPassworxd",
};

export const useAsynclogin = async () => {
  try {
    const resp = await fetch(
      "https://tiendavirtualmern.herokuapp.com/api/login",
      {
        method: "POST",
        body: JSON.stringify(objeto.name, objeto.password),
        headers: { "content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
