var btnsModules = $('.regimen-button .radio');

logicaButtons(btnsModules);

function logicaButtons(elems) {
    elems.each(function () {
        $(this).click(function () {
            $(this).parent()
                .parent()
                .parent()
                .find('.flex-item, .flex-item .regimen-button')
                .removeClass('select')
                .removeClass('no-select');

            $(this).parent()
                .parent()
                .removeClass('no-select')
                .addClass('select')
                .find('.regimen-button')
                .removeClass('no-select')
                .addClass('select');
        });
    });
}