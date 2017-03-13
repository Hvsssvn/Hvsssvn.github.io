$(document).ready(function (){

	$.bigFoto = function() {
		var contPrincipal = $('.b-home header'),
			altoVentana = $(window).height();
			altoContenedor = contPrincipal.height();
		if (altoContenedor >= altoVentana){
			contPrincipal.css({
				'height': 850
			});
		} else {
			contPrincipal.css({
				'height': altoVentana
			});
		}
		
	};
$.altos = function() {
	$("a.link-img").each(function() {
		var $this = $(this),
			linkAncho = $this.width();
		
		$this.css('height', linkAncho);
	});
};
$.altosCirc = function() {
	$(".soluciones-circ .tit-circ, .invertir-circ .tit-circ, .cont-tit-soluciones .tit-circ").each(function() {
		var $this = $(this),
			linkAncho = $this.width();
		
		$this.css('height', linkAncho);
	});
};
/*
PARA TODO
*/
if ($('body').hasClass("b-home")) {
	$('.btn-inicio').addClass("active").click(function(event){
		event.preventDefault();
	});
	$.bigFoto();
	$.altosCirc();
	$(window).resize(function(){
		$.bigFoto();
		$.altosCirc();
	});
	
}/*Home*/
else if ($('body').hasClass("b-seo")) {
	$('.btn-seo').addClass("active").click(function(event){
		//event.preventDefault();
	});
	
}/*SEO*/

else if ($('body').hasClass("b-sem")) {
	$('.btn-sem').addClass("active").click(function(event){
		//event.preventDefault();
	});
	
}/*SEM*/

else if ($('body').hasClass("b-servicios")) {
	$('.btn-servicios').addClass("active").click(function(event){
		//event.preventDefault();
	});
	
}/*servicios*/

else if ($('body').hasClass("b-blog")) {
	$('.btn-blog').addClass("active").click(function(event){
		//event.preventDefault();
	});
	$.altos();
	$(window).resize(function(){
		$.altos();
	});
	
}/*BLOG*/

else if ($('body').hasClass("b-contacto")) {
	$('.btn-contacto').addClass("active").click(function(event){
		event.preventDefault();
	});
	
}/*Contacto*/

/*
TERMINA TODO
*/

	if (Modernizr.touch) {   /* Version Touch */


/* Temrina Touch */


	} else {
		/*Generales para NO TOUCH*/

		

	} /* Termina No Touch */


});/*jQuery*/