const buttonProfile = document.getElementById("profile");
const buttonEnd = document.getElementById("out");
const buttonUser = document.getElementById("username");
const navItem = document.getElementById('idIconCompra');

if (localStorage.getItem(`Sesion`)) {
  let user = JSON.parse(localStorage.getItem(`Sesion`));
  buttonProfile.innerHTML = `${user.username}`;
  buttonProfile.href ='pages/profile.html';
  buttonEnd.innerHTML = `Cerrar Sesion`;
  buttonEnd.href = '../index.html';
  buttonEnd.onclick = function(){
    localStorage.removeItem(`Sesion`);
  }
}

if(localStorage.getItem('Carrito')){
  if(navItem != null){
    navItem.innerHTML =`
    <a class="nav-link enable text-light" aria-current="page" href="pages/Carrito.html">
    <i class="bi-basket"></i> Compras</a>
    `
  }
}
