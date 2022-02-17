function insertBeforeHTML() {
    $('<div style="color: red;"> Este texto se está insertando por el método insertBefore() </div>').insertBefore($('#insertBefore'));
    $('#insertBefore').before('<div style="color: red;"> Este texto se está insertando por el método before() </div>')
}