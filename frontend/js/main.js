// Se lanza cuando se ha cargado la página
window.onload = function(){
	// console.log('Javascript cargado');

	// Configuramos los elementos del DOM
	setup_DOM();

	// Configuramos JS como cargado
	jscheck();

	// Detectamos si el acceso se produce desde desde dispositivo móvil
	mobilecheck();

	// Activa funcionamiento de menú burguer
	burguer();

	// Elimina la clase de carga
	removeClass(page.html, 'loading');

	// Iguala hijos directos de elementos con clas .equalheight
	equalheight(page.equal);
};


// Se lanza al redimensionar la ventana
$(window).resize(function(){
	equalheight(page.equal);
	mobilecheck();
});