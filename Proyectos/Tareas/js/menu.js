require('colors');

const menu = () => {

    return new Promise( (resolve, reject) => {
        console.clear();
        console.log("Saludos Progrmas".blue);

        console.log("      Menu:".red);
        console.log(`${'1.'.red} ${"Crear una tarea".green}`);
        console.log(`${'2.'.red} ${"Listar tareas".green}`);
        console.log(`${'3.'.red} ${"Listar tareas completadas".green}`);
        console.log(`${'4.'.red} ${"Listar tareas pendientes".green}`);
        console.log(`${'5.'.red} ${"Completar una tarea".green}`);
        console.log(`${'6.'.red} ${"Eliminar tarea".green}`);
        console.log(`${'0.'.red} ${"Salir".green}`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Elige una opción: ', (opc) => {
            readline.close();
            resolve(opc);
        });
    });
    

};

const pausa = () => {};

module.exports = {
    menu,
    pause
};