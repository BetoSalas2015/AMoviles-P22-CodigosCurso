console.log(this);

function b() {
    console.log(this);
}

b();

var objeto = {
    nombre: "Objeto",
    fun: function() {
        console.log(this);
        console.log(this.nombre);
    }
}

objeto.fun();