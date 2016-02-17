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

	$("#popup").fadeIn("slow");

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

	$("#mensajepopup").append("<div>"+mensaje+"</div><br><label class='botones' onclick='"+fn+"' id='si'>Si</label> <label class='botones' onclick='cerrarPopup()' id='no'>No</label>");

	$("#popup").fadeIn("slow");
}

function cerrarPopup () {

	$('#popup').fadeOut(1000,function(){$(this).remove();$('body').css({'overflow-y':'auto'});});

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

	}, 1500);

	$("#popup").fadeIn("slow");

}
