const btnRegister = document.getElementById("btnRegistrar");

const inputName = document.getElementById("idNombre");
const inputSurname = document.getElementById("idApellido");
const inputUsername = document.getElementById("idNombreUsuario");
const inputNumber = document.getElementById("idTelefono");
const inputLocation = document.getElementById("idDireccion");
const inputEmail = document.getElementById("idCorreo");
const inputPass = document.getElementById("idContrasena");
const inputPassrep = document.getElementById("idContrasenaRep");

const security = document.getElementById("security_level");

const registro ={
    id: 0,
    nombre: '',
    apellido: '',
    username: '',
    numero: 0,
    direccion: '',
    email: '',
    pass: '',
}

btnRegister.onclick = function () {
  let emtxt = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (
    inputName.value != "" &&
    inputSurname.value != "" &&
    inputUsername.value != "" &&
    inputNumber.value != "" &&
    inputLocation.value != "" &&
    inputEmail.value != "" &&
    inputPass.value != ""
  ) {
    if (inputPassrep.value != "") {
      if (inputPass.value == inputPassrep.value) {
        if (inputPass.value.length >= 8) {

            let numero = localStorage.length;

            const registro ={
                nombre: `${inputName.value}`,
                apellido: `${inputSurname.value}`,
                username: `${inputUsername.value}`,
                numero: inputNumber.value,
                direccion: `${inputLocation.value}`,
                email: `${inputEmail.value}`,
                pass: `${inputPass.value}`,
            }

            localStorage.setItem(`${inputUsername.value}`, JSON.stringify(registro));
            alert(`Usuario ${inputName.value} agregado`)
            window.location.href = 'Login.html'

        } else {
          alert("Contraseña insegura");
        }
      } else {
        alert("Las contraseñas no coinciden");
      }
    } else {
      alert("Por favor confirme su contraseña");
    }
  } else {
    alert("Por favor rellene todos los campos");
  }
};

inputPass.onchange = function () {
  if (inputPass.value.length < 8) {
    security.style.color = "red";
    security.innerHTML = "Contraseña insegura";
  } else {
    security.style.color = "green";
    security.innerHTML = "Contraseña aceptable";
  }
};
