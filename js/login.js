const btnLogin = document.getElementById('btnLogin');
const idLoginCorreo = document.getElementById('idLoginCorreo');
const idLoginPass = document.getElementById('idLoginContrasena');



btnLogin.onclick = function obtener(){
    if(localStorage.getItem(`${idLoginCorreo.value}`)){
        let user = JSON.parse(localStorage.getItem(`${idLoginCorreo.value}`))

        
        if(idLoginPass.value == user.pass){
            alert(`Bienvenido ${user.username}`);
            localStorage.setItem('Sesion', JSON.stringify(user));
            window.location.href = '../index.html'
        }else{
            alert('contrasena incorrecta')
        }
    }else{
        alert('Credenciales incorectas')
    }
}

/*let numero = localStorage.length;
    alert(`las claves guardadas son: ${numero}`) */