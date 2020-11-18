
document.getElementById("iniciarsesion").addEventListener("click", iniciarsesion);
document.getElementById("Registrarse").addEventListener("click",registro);

 var formulario = document.querySelector(".formulario");
 var formulario_login = document.querySelector(".datos__login");
 var formulario_registro = document.querySelector(".registrarse__delogin");
 var cajaatraslogin = document.querySelector(".cajaatraslogin");
 var cajaregistro= document.querySelector(".cajaregistro");

 function iniciarsesion(){


    formulario_registro.style.display  = "none";
    formulario.style.left ="10px";
    formulario_login.style.display="block";
    cajaregistro.style.opacity  ="1";
    cajaatraslogin.style.opacity ="0";
}
function registro(){


    formulario_registro.style.display  = "block";
    formulario.style.left ="410px";
    formulario_login.style.display="none";
    cajaregistro.style.opacity  ="0";
    cajaatraslogin.style.opacity = "1";
}


