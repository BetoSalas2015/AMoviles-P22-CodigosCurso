var persona = {
    nombre: "Juan",
    apellido: "Pérez",
    getNombre: function(lang) {
        var nombreCompleto = this.nombre + ' ' + this.apellido + "(" + lang + ")";
        return nombreCompleto;
    }
};

var persona2 = {
    nombre: "Pedro",
    apellido: "Lopez"
};

console.log(persona.getNombre.apply(persona2,['es']));

