function insertAfterHTML() {
    $('<div style="color: red;"> Este texto se está insertando por el método insertAfter() </div>').insertAfter($('#insertAfter'));
    $('#insertAfter').after('<div style="color: red;"> Este texto se está insertando por el método After() </div>')
}