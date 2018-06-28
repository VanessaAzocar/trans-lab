/* funcion de Ingresar contraseña */
function enter() {
  const password = document.getElementById("inputPassword").value;
  if (password.length <= 8) {
   window.open('home.html')
  } else {
    document.getElementById('incorrectPassword').innerHTML = '¡Datos inválidos! La contraseña debe tener hasta 8 números.';
  }
}


