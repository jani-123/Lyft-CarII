'use strict';
var pais = {
    
    iniciar: function(){
        let paisChile = document.getElementById("paisChile");
        let paisPeru = document.getElementById("paisPeru");
        let paisMexico = document.getElementById("paisMexico");
        let telefono = document.getElementById("telefonos");
        let cuadroCodigo = document.getElementById("muestraCodigo");
    
        paisPeru.addEventListener("click", function () {
            telefono.value = "+51-";
        });
        paisMexico.addEventListener("click", function () {
            telefono.value = "+52-";
        });
        paisChile.addEventListener("click", function () {
            telefono.value = "+56-";
        });
        $("#codigo").click(function () { 
            if (telefono.value != "") {
                cuadroCodigo.innerHTML = "";
                var generaCodigo = pais.codigoAleatorio();
                let codigo = document.createTextNode("Codigo: " + generaCodigo);
                let textoCodigo = document.createElement("p");
                textoCodigo.appendChild(codigo);
                cuadroCodigo.appendChild(textoCodigo);
            }
        }); 

    },
    codigoAleatorio: function() {
        var textoCodigo = "";
        var aleatorio = "0123456789abcdefghijklmnopqrstuvwxyz";
      
        for (var i = 0; i < 6; i++)
          textoCodigo += aleatorio.charAt(Math.floor(Math.random() * aleatorio.length));
      
        return textoCodigo;
    }
}
$(document).ready(pais.iniciar);
    

