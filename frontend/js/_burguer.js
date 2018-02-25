burguer = function(){
	page.burguer.click(openCloseMenuBurger);
};

$(window).resize(function () {
	if($('html').attr('class').indexOf('menu-open') > -1) {
		openCloseMenuBurger();
	}
});

// Abrir/Cerrar menú Burger
openCloseMenuBurger = function () {
    // Toggle class
    page.html.toggleClass('menu-open');
    page.burguer.icon.toggleClass('fa-bars fa-close');
}