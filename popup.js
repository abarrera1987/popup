function mensajePopup (mensaje, destino) {

	$("body").css({"overflow-y":"hidden"});

	var ventana_alto = $(window).height();

	$('#mensajepopup').text('');

	$("body").append("<div id='popup'><div id='mensajepopup'></div></div>")

	$("#popup").css('height', ventana_alto);

	$("#mensajepopup").append("<div>"+mensaje+"</div>");

	setTimeout(function(){

		$(location).attr("href", direccion+destino);

	}, 1500);

}
/* 

mesaje: mensaje informativo

fn: funcion que se debe ejecutar al decir si

*/
function confirmPopup (mensaje,fn) {
	
	$("body").css({"overflow-y":"hidden"});

	var ventana_alto = $(window).height();

	$('#mensajepopup').text('');

	$("body").append("<div id='popup'><div id='mensajepopup'></div></div>")

	$("#popup").css('height', ventana_alto);

	$("#mensajepopup").append("<div>"+mensaje+"</div><br><div><label onclick='cerrarPopup()' id='no'>Cancelar</label> <label onclick='"+fn+"' id='si'>Confirmar</label></div><script>$(document).keydown(function(e){ if(e.which == 27){ cerrarPopup() }});");

}

function cerrarPopup () {

	$('body').css({'overflow-y':'auto'});

	$("#mensajepopup").remove();

	$('#popup').remove();
	
}

function mensajeFalsePopup (mensaje) {

	$("body").css({"overflow-y":"hidden"});

	var ventana_alto = $(window).height();

	$('#mensajepopup').text('');

	$("body").append("<div id='popup'><div id='mensajepopup'></div></div>")

	$("#popup").css('height', ventana_alto);

	$("#mensajepopup").append("<div>"+mensaje+"</div>");

	setTimeout(function(){

		cerrarPopup();

		return false;

	}, 2000);

	$("#popup").fadeIn("slow");

}
