/* funcion de Ingresar contraseña */
function enter() {
  const password = document.getElementById("inputPassword").value;
  if (password.length <= 8) {
    const btnhide = document.getElementById('btnEnter');
    btnhide.addEventListener('click', () => {
      document.getElementsByClassName('startLogin')[0].classList.add('btnEnter');
      document.getElementsByClassName('afterEntering')[0].classList.remove('afterEntering');
    }
    );
  } else {
    document.getElementById('incorrectPassword').innerHTML = '¡Datos inválidos! Vuelve a intentarlo.';
  }
}