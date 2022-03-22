//  Ejercicios de NodeJs
//  Principios de nodejs
const { crearArchivo } = require('./js/Tablas.js');
const { argv } = require('./js/config');

let base = argv.base;
let limite = argv.l;
let echo = argv.echo;

crearArchivo(base, limite, echo)
  .then(nombreArchivo => console.log( nombreArchivo + " creada") )
   .catch(err => console.log(err) );