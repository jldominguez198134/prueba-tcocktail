function apagamosBuffer() {
    var buffer = $('.buffer');
    
    buffer.animate({
        'opacity': 0
    }, 300, function () {
        buffer.css('display', 'none');
    });
}