'use strict';
const registro  = {
    item :  {
        nombre: undefined,
        correo: undefined
    },
    init : function () {
        registro.item.nombre =   $('#nombre');
		registro.item.correo =   $('#correo');
        registro.setup ();
        registro.aceptaCondiciones();
    },

    setup: function () {
        $('#registro').click (registro.agregaComentario,registro.validarCorreo);
        $( "input[type=checkbox]" ).click(registro.aceptaCondiciones );
       // $('#validaCorreo').click(registro.validarCorreo);
    },

    agregaComentario: function () {
		localStorage.setItem(registro.item.nombre.val(), registro.item.correo.val());
		alert("Nombre:  ${registro.item.nombre.val()}  Email: ${registro.item.correo.val()}");
		
	},
	mostrar: function(){
		for(var i=0 ; i<localStorage.length ; i++) 
		{
			let clave = localStorage.key(i);
			let value = localStorage.getItem(nombre);
			alert("Nombre:  ${clave}  Email: ${value}");
		}
    },
    aceptaCondiciones: function() {
        let n = $( "input:checked" ).length;
        if(n != "")
        {
            alert("Debe aceptar las condiciones");
        }
      
    },
    validarCorreo: function() {
        let validacion = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if (validacion.test($('#correo').val().trim())) {
            alert('Correo validado');
        } else {
            alert('La direccón de correo no es valida');
        }
    }
};
$(document).ready ( registro.init );


