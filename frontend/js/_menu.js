var menuItems = $('.menu-options [class*="tab"] button'),
    htmlTabClass,
    sHtmlTabClass;

logicaMenu(menuItems);

function logicaMenu(elems) {
    elems.each(function () {
        $(this).click(function () {
            htmlTabClass = $('html').attr('class');
            sHtmlTabClass = htmlTabClass.split(' ');

            $('html').removeClass(sHtmlTabClass[0]);
            $('html').attr('class', $(this).parent().attr('class'));

            for(var i = 0; i < sHtmlTabClass.length; i++) {
                $('html').removeClass(sHtmlTabClass[0]);
                $('html').addClass(sHtmlTabClass[i]);
            }

            console.log($('.m-portada-' + sHtmlTabClass[0]).attr('class'));
            $('.m-portada-' + sHtmlTabClass[0]).toggle('fast');
            $('.m-portada-' + $(this).parent().attr('class')).toggle('fast');

            openCloseMenuBurger();
        });
    });
}