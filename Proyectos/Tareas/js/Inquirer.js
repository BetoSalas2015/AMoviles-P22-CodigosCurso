const inquirer = require('inquirer');
require('colors');

const menuOpciones = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tarea'
            },
            {
                value: '3',
                name: '3. listar tareas Completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar una tarea'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
];

const mensajePausa = [ {
    type: 'input',
    name: 'enter',
    message: `Presione ${'ENTER'.red} para continuar`
} ];

const inquirerMenu = async() => {
    console.clear();
    const { opcion } = await inquirer.prompt(menuOpciones);
    return opcion;
};

const pausa = async() => {
    await inquirer.prompt(mensajePausa);
};

const leerEntrada = async(message) => {
    const pregunta = {
        type: 'input',
        name: 'desc',
        message,
        valdate( value ) {
            if (value.length === 0) {
                return 'Ingrese un valor';
            }
            return true;
        }
    }

    const { desc } = await inquirer.prompt(pregunta);
    return desc;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerEntrada
}