//  Tablas V.01
const fs = require('fs');

const crearArchivo = async(base) => {
    
    let salida = "";

    for (let i = 0; i < 10; i++) {
        salida += `${base} * ${i} = ${base * i}\n`; 
    }

    console.log("================");
    console.log(" Tabla del 5");
    console.log("================");
    console.log(salida);
    fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
        if(err) throw err;
    });
    return `Tabla-${base}`

};

module.exports = {
    crearArchivo
};
