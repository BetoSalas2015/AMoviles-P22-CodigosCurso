//  Ejercicios de NodeJs
//  Principios de nodejs
//  Versión de Tablas: 01
const { crearArchivo } = require('./js/Tablas');

const base = 5;


crearArchivo(base)
    .then(nombreArchivo => console.log( nombreArchivo + " creada") )
    .catch(err => console.log(err) );
