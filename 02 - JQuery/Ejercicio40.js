$(document).ready( function() {
    $("#btnClick").click( function() {
        alert("Soy el evento Click");
    });
    $("#btnMouseOver").mouseover( function() {
        alert("Soy el evento Mouseover");
    });
    $("#btnLeave").mouseleave( function() {
        alert("Soy el evento MouseLeave");
    });
})