const btnComprarGeneral = document.getElementById("idBuyGen");
const btnComprarPulido = document.getElementById("idBuyPulid");
const btnComprarTapiceria = document.getElementById("idBuyTap");

let compras;
const refresh = actualizarIcono;

const verificarexistencia = function () {
  if (localStorage.getItem(`Carrito`)) {
    return true;
  } else {
    return false;
  }
};

const agregarCarrito = function () {
  compras = {
    itemGen: false,
    itemPul: false,
    itemTap: false,
  };
};

const obtenerCarrito = function () {
  compras = JSON.parse(localStorage.getItem("Carrito"));
};

if (localStorage.getItem("Sesion")) {
  if (btnComprarGeneral != null) {
    btnComprarGeneral.onclick = function () {
      if (verificarexistencia() == true) {
        obtenerCarrito();
        if (compras.itemGen == false) {
          compras.itemGen = true;
          localStorage.setItem("Carrito", JSON.stringify(compras));
        } else {
          alert("Ya ha agregado este servicio a su carrito");
        }
      } else {
        agregarCarrito();
        compras.itemGen = true;
        localStorage.setItem("Carrito", JSON.stringify(compras));
        refresh();
      }
    };
  }

  if (btnComprarPulido != null) {
    btnComprarPulido.onclick = function () {
      if (verificarexistencia() == true) {
        obtenerCarrito();
        if (compras.itemPul == false) {
          compras.itemPul = true;
          localStorage.setItem("Carrito", JSON.stringify(compras));
        } else {
          alert("Ya ha agregado este servicio a su carrito");
        }
      } else {
        agregarCarrito();
        compras.itemPul = true;
        localStorage.setItem("Carrito", JSON.stringify(compras));
        refresh();
      }
    };
  }

  if (btnComprarTapiceria != null) {
    btnComprarTapiceria.onclick = function () {
      if (verificarexistencia() == true) {
        obtenerCarrito();
        if (compras.itemTap == false) {
          compras.itemTap = true;
          localStorage.setItem("Carrito", JSON.stringify(compras));
        } else {
          alert("Ya ha agregado este servicio a su carrito");
        }
      } else {
        agregarCarrito();
        compras.itemTap = true;
        localStorage.setItem("Carrito", JSON.stringify(compras));
        refresh();
      }
    };
  }
} else {
  if (btnComprarTapiceria != null) {
    btnComprarTapiceria.onclick = function () {
      alert("Solo las personas con cuenta pueden agregar items a carrito");
    };
  }

  if (btnComprarGeneral != null) {
    btnComprarGeneral.onclick = function () {
      alert("Solo las personas con cuenta pueden agregar items a carrito");
    };
  }

  if (btnComprarPulido != null) {
    btnComprarPulido.onclick = function () {
      alert("Solo las personas con cuenta pueden agregar items a carrito");
    };
  }
}
