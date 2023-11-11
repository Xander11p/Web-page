const buttonLavadoGen = document.getElementById("button_service-1");
const buttonpulido = document.getElementById("button_service-2");
const buttonTapiceria = document.getElementById("button_service-3");
const buttonPromo = document.getElementById("button_service-4");

const container = document.getElementById('container_buttons')

buttonLavadoGen.onmouseover = function(){
    buttonLavadoGen.style.color = '#3F55E9';
    buttonLavadoGen.style.borderTopLeftRadius = '0';
    container.style.borderTopLeftRadius = '0';
}

buttonLavadoGen.onmouseleave = function(){
    buttonLavadoGen.style.color = '#A7A7A7';
    buttonLavadoGen.style.borderTopLeftRadius = '50%';
    container.style.borderTopLeftRadius = '50%';
}

buttonpulido.onmouseover = function(){
    buttonpulido.style.color = '#3F55E9';
    buttonpulido.style.borderTopRightRadius = '0';
    container.style.borderTopRightRadius = '0';
}

buttonpulido.onmouseleave = function(){
    buttonpulido.style.color = '#A7A7A7';
    buttonpulido.style.borderTopRightRadius = '50%';
    container.style.borderTopRightRadius = '50%';
}

buttonTapiceria.onmouseover = function(){
    buttonTapiceria.style.color = 'white';
    buttonTapiceria.style.borderBottomLeftRadius = '0';
    container.style.borderBottomLeftRadius = '0';
}

buttonTapiceria.onmouseleave = function(){
    buttonTapiceria.style.color = '#A7A7A7';
    buttonTapiceria.style.borderBottomLeftRadius = '50%';
    container.style.borderBottomLeftRadius = '50%';
}

buttonPromo.onmouseover = function(){
    buttonPromo.style.color = 'black';
    buttonPromo.style.borderBottomRightRadius = '0';
    container.style.borderBottomRightRadius = '0';
}

buttonPromo.onmouseleave = function(){
    buttonPromo.style.color = '#A7A7A7';
    buttonPromo.style.borderBottomRightRadius = '50%';
    container.style.borderBottomRightRadius = '50%';
}

buttonLavadoGen.onclick = function(){
    window.location.href = '../pages/LavadoGen.html'
}

buttonpulido.onclick = function(){
    window.location.href = '../pages/LavadoPulid.html'
}

buttonTapiceria.onclick = function(){
    window.location.href = '../pages/limpiezaTap.html'
}

buttonPromo.onclick = function(){
    window.location.href = '../pages/Promociones.html'
}