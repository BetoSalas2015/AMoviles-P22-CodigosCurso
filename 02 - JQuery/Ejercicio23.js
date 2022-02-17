function checkGender() {
    if($('#hombre').is(":checked"))
        alert("Seleccionado Hombre")
    else 
        if($('#mujer').is(":checked"))
            alert("Seleccionado Mujer")
}