const buttonProfile = document.getElementById("profile");
const buttonEnd = document.getElementById("out");
const buttonUser = document.getElementById("username");

if (localStorage.getItem(`Sesion`)) {
  let user = JSON.parse(localStorage.getItem(`Sesion`));
  buttonProfile.innerHTML = `${user.username}`;
  buttonProfile.href ='profile.html';
  buttonEnd.innerHTML = `Cerrar Sesion`;
  buttonEnd.href = '../index.html';
  buttonEnd.onclick = function(){
    localStorage.removeItem(`Sesion`);
    localStorage.removeItem('Carrito');
  }

  if(document.getElementById('idProfileName')){
    const name = document.getElementById('idProfileName');
    const surname = document.getElementById('idProfileSurname');
    const location = document.getElementById('idProfileLocation');
    const number = document.getElementById('idProfileNumber');





    name.innerHTML = `${user.nombre}`;
    surname.innerHTML = `${user.apellido}`;
    location.innerHTML = `${user.direccion}`;
    number.innerHTML = `${user.numero}`;
  }
}

function actualizarIcono(){
  if(localStorage.getItem('Carrito')){
    const navItem = document.getElementById('idIconCompra');
    if(navItem != null){
      navItem.innerHTML =`
      <a class="nav-link enable text-light" aria-current="page" href="Carrito.html">
      <i class="bi-basket"></i> Compras</a>
      `
    }
  }
}

actualizarIcono();

