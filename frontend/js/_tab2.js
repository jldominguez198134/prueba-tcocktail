var openCloseItems = $('.title-principal.arrow, .title.arrow');

logicaMasInfo(openCloseItems);

function logicaMasInfo(elems) {
    elems.each(function () {
        $(this).click(function () {
            $(this).toggleClass('open close');

            if($(this).attr('class').indexOf('title-principal') > -1) {
                console.log($(this).attr('class'));
                $(this).next().toggle('fast');
            } else {
                $(this)
                    .parent()
                    .parent()
                    .parent()
                    .find('.mas-info')
                    .toggle('fast');
            }
        });
    });
}