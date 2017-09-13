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
        $('#registro').click (registro.agregaComentario);
        $( "input[type=checkbox]" ).click(registro.aceptaCondiciones );
    },

    agregaComentario: function () {
		localStorage.setItem(registro.item.nombre.val(), registro.item.correo.val());
		alert( `<p> ${registro.item.nombre.val()} </p>\
		        <p>  ${registro.item.correo.val()} </p>`);
		
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
      
    }
};
$(document).ready ( registro.init );
