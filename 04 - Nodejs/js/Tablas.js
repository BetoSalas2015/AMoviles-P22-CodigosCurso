//  Tablas V.02
const fs = require('fs');
require('colors');

const crearArchivo = async(base, limite, echo) => {
    
    let salida = "";
    console.clear();

    for (let i = 1; i <= limite; i++) {
        salida += `${base} * ${i} = ${base * i}\n`; 
    }

    if (echo) {
        console.log("================".red);
        console.log(` Tabla del ${base}`);
        console.log("================".red);
        console.log(salida.green);
    }
    
    fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
        if(err) throw err;
    });
    return `Tabla-${base}`

};

module.exports = {
    crearArchivo
};
