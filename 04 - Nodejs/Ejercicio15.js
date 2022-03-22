//  Ejercicios de NodeJs
//  Principios de la linea de comandos
//  Version de Tabla: 01
const { crearArchivo } = require('./js/Tablas');

const argv = process.argv[2];
const [,base] = argv.split('=');
console.log(base);


crearArchivo(base)
   .then(nombreArchivo => console.log( nombreArchivo + " creada") )
   .catch(err => console.log(err) );
