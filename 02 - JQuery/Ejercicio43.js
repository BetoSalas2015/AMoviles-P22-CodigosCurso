$(document).ready(function() {
    $("#btnToggle").click(function() {
        $("p").toggle("slow", function() {
            alert("Llamado despés de que el elemento se mostró ");
        });
    });
});