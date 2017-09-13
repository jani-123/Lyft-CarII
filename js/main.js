'use strict';
var cambioVistas = {
    init: function(){
        cambioVistas.setup();
    },
    setup: function(){
        $('#seccion').click(cambioVistas.Seccion);
        $('#siguiente').click(cambioVistas.Siguiente);
        $('#mapa').click(cambioVistas.mapa);
    }, 
    Seccion : function(){
        document.location.href = "sign.html";
    },
    Siguiente : function(){
        document.location.href = "registro.html";
    },
    mapa : function(){
        document.location.href = "mapa.html";
    }
}
$(document).ready(cambioVistas.init);
