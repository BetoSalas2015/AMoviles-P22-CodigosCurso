function persona(nombre, apellido) {
    this.nombre = nombre;
    this.appellido = apellido;
};

persona.prototype.getFullName = function() {
    return this.nombre + " " + this.appellido;
};

var juan = new persona("Juanito", "Perez");
var pedrito = new persona("Pedrito", "López");

console.log(juan.getFullName());
console.log(pedrito.getFullName());