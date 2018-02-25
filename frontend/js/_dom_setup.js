function setup_DOM(){
	page = {};
	page.html = $('html');
	page.head = $('head');
	page.burguer = $('.burguer button');
	page.burguer.icon = $('.burguer button i');
	page.equal = $('.equalheight > *');

	setTimeout(function () {
		apagamosBuffer();
	}, 200);

	// console.log('DOM configurado');
}