const containerGen = document.getElementById("idDivGen");
const containerPul = document.getElementById("idDivPul");
const containerTap = document.getElementById("idDivTap");
const montoTotal = document.getElementById("idMonto");
const btnCompletar = document.getElementById("btnCompletarCompra");
const txt_compra = document.getElementById('text_buy');
const btnNavCompra = document.getElementById('idIconCompra');
const spanCompra = document.getElementById('idTxtSpanCompra');
const divButtonsCompra = document.getElementById('divButtonsCompra');



let total = function () {
  let monto = 0;
  const verificar = JSON.parse(localStorage.getItem("Carrito"));

  if (verificar.itemGen == true) {
    monto = monto + 10;
  }
  if (verificar.itemPul == true) {
    monto = monto + 15;
  }
  if (verificar.itemTap == true) {
    monto = monto + 50;
  }

  return monto;
};

const refresMonto = function(){
  montoTotal.innerHTML = `$${total()}`;
  const compras = JSON.parse(localStorage.getItem("Carrito"));
  if(compras.itemGen == false && compras.itemPul == false && compras.itemTap == false){
    localStorage.removeItem('Carrito')
    ifComprasNull()
  }
};

const ifComprasNull = function(){
  txt_compra.innerHTML = 'No tiene compras agregadas';
  btnCompletar.innerHTML = 'Ver los servicios';
  btnNavCompra.innerHTML = ''
}

if (localStorage.getItem(`Carrito`)) {
  const compras = JSON.parse(localStorage.getItem("Carrito"));

  if (compras.itemGen == true) {
    containerGen.innerHTML = `
      <div class="col-12">
      <div class="contenedor-parrafo">
      <h4 class="mt-3 fontWhite">Lavado General --> Precio: $10.00</h4>
      <button type="button" class="btn btn-danger" id="idEliminarCompraGen">Eliminar</button>
      </div>
      </div>
      `;
  }

  if (compras.itemPul == true) {
    containerPul.innerHTML = `
      <div class="col-12">
      <div class="contenedor-parrafo">
      <h4 class="mt-3 fontWhite">Lavado y pulido --> Precio: $15.00</h4>
      <button type="button" class="btn btn-danger" id="idEliminarCompraPul">Eliminar</button>
      </div>
      </div>
      `;
  }

  if (compras.itemTap == true) {
    containerTap.innerHTML = `
      <div class="col-12">
      <div class="contenedor-parrafo">
      <h4 class="mt-3 fontWhite">Lavado y limpieza de tapiceria --> Precio: $50.00</h4>
      <button type="button" class="btn btn-danger" id="idEliminarCompraTap">Eliminar</button>
      </div>
      </div>
      `;
  }
  refresMonto();
}else{
  txt_compra.innerHTML = 'No tiene compras agregadas'
  btnCompletar.innerHTML = 'Ver los servicios'
}

/*alert('Compra realizada con exito')
  window.location.href = '../index.html';*/

btnCompletar.onclick = function(){
  if(localStorage.getItem(`Carrito`)){
    containerGen.innerHTML = '';
    containerPul.innerHTML = '';
    containerTap.innerHTML = '';
    txt_compra.innerHTML = 'No tiene compras agregadas'
    spanCompra.innerHTML = 'Compra Realizada';
    divButtonsCompra.innerHTML = ''
    divButtonsCompra.innerHTML = `
    <button class="btn btn-success mt-2" id="btnVolver"><a class="link_no" href ="../index.html">Volver al inicio</a></button>
    `;
    localStorage.removeItem('Carrito');
  }else{
    window.location.href = 'allServices.html';
  }
  
}

const btnEliminarGen = document.getElementById('idEliminarCompraGen');
const btnEliminarPul = document.getElementById('idEliminarCompraPul');
const btnEliminarTap = document.getElementById('idEliminarCompraTap');

if(btnEliminarGen != null){
  btnEliminarGen.onclick = function(){
    containerGen.innerHTML = '';
    const compras = JSON.parse(localStorage.getItem("Carrito"));
    compras.itemGen = false;
    localStorage.setItem(`Carrito`, JSON.stringify(compras));
    refresMonto();
    
  }
}

if(btnEliminarPul != null){
  btnEliminarPul.onclick = function(){
    containerPul.innerHTML = '';
    const compras = JSON.parse(localStorage.getItem("Carrito"));
    compras.itemPul = false;
    localStorage.setItem(`Carrito`, JSON.stringify(compras));
    refresMonto();
    
  }
}

if(btnEliminarTap != null){
  btnEliminarTap.onclick = function(){
    containerTap.innerHTML = '';
    const compras = JSON.parse(localStorage.getItem("Carrito"));
    compras.itemTap = false;
    localStorage.setItem(`Carrito`, JSON.stringify(compras));
    refresMonto();
    
  }
}

if(btnVolverIndex != null){
  btnVolverIndex.onclick = function(){
    window.location.href = '../index.html'
  }
}

//<button type="button" class="btn btn-danger">Eliminar</button>

