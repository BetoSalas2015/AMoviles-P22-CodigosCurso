const argv = require('yargs')
   .option('b',{
      alias: 'base',
      default: 5,
      type: 'number',
      describe: 'Base de la tabla de multiplicar'
   })
   .option('l', {
      alias: 'limite',
      demandOption: false,
      default: 10,
      type: 'number',
      description: 'Límite de la tabla de multiplicar'
   })
   .option('e', {
      alias: 'echo',
      demandOption: false, 
      default: 'false',
      type: 'boolean',
      describe: 'Mostrar la tabla en pantalla'
   })
   .check( (argv, opctions) => {
      if ( isNaN(argv.b) ) {
         throw 'La base no es un número';
      } else {
         return true;
      }
   })
   .argv;

   module.exports = {
       argv
   };