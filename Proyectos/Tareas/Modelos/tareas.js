const Tarea = require('./tarea');
require('colors');

class Tareas {
    lista = {};

    constructor() {
        this.lista = {};
    }

    crearTarea = (desc) => {
        const tarea = new Tarea(desc);
        this.lista[tarea.id] = tarea;
    }

}

module.exports = Tareas;