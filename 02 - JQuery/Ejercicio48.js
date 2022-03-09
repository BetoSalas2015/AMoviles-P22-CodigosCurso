function slideToggleDiv() {
    $("#divMsg").slideToggle(1000, function() {
        alert("El slideDown ha concluido");
    });
};