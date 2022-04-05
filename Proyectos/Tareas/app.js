require('colors');
const { inquirerMenu, pausa, leerEntrada } = require('./js/Inquirer');
const Tarea = require('./Modelos/tarea');
const Tareas = require('./Modelos/tareas');


const main = async() => {

    let opc = '0';
    const tareas = new Tareas();
    

    do {
        opc = await inquirerMenu();
        switch (opc) {
            case '1':   //  1. crear tarea
                    const desc = await leerEntrada('Dame el nombre de la tarea: ')
                    tareas.crearTarea(desc);
                    console.log(tareas);
                break;
            case '2':   // Listar tareas
                    console.log('Estoy en la opción 2');
                break;
            case '3':   // Listar las tareas completadas
                    console.log('Estoy en la opción 3');
                break;
            case '4': // listar las tareas pendientes
                    console.log('Estoy en la opción 4');
                break;
            case '5':   //  Completar una tarea
                    console.log('Estoy en la opción 5');
                break;
            case '6':   // Borrar una tarea
                    console.log('Estoy en la opción 6');
                break;
        }

        await pausa();
    } while (opc !== '0');
    
    

}

main();