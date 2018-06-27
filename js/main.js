/* funcion de Ingresar contraseña */
function enter() {
  if (document.form.inputPassword.value.lenght >= ) {
    const btnhide = document.getElementById('btn-primary');
    btnhide.addEventListener('click', () => {
      document.getElementsByClassName('submit')[0].classList.add('btn-primary');
      document.getElementsByClassName('afterEntering')[0].classList.remove('afterEntering');
    }
    );
  } else {
    document.getElementById('incorrectPassword').innerHTML = '¡Datos inválidos! Vuelve a intentarlo.';
  }
}