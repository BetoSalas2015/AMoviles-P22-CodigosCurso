//  Ejercicios de NodeJs
//  Principios de nodejs
const fs = require('fs');

const base = 5;

const crearArchivo = async(base) => {
    
    let salida = "";

    for (let i = 0; i < 10; i++) {
        salida += `${base} * ${i} = ${base * i}\n`; 
    }

    console.clear();
    console.log("================");
    console.log(" Tabla del 5");
    console.log("================");
    console.log(salida);
    fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
        if(err) throw err;
    });
    return `Tabla-${base}`

};

crearArchivo(base)
    .then(nombreArchivo => console.log( nombreArchivo + " creada") )
    .catch(err => console.log(err) );
