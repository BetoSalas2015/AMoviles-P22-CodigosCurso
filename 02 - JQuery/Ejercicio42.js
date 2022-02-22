$(document).ready(function() {
    $("#btnShow").click(function() {
        $("p").show("slow", function() {
            alert("Llamado despés de que el elemento se mostró ");
        });
    });
});