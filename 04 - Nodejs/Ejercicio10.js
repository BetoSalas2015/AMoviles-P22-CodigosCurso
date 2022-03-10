// Callbacks

const empleados = [
    {
        id: 1,
        nombre: "Roberto"
    },
    {
        id: 2,
        nombre: "Juan"
    },
    {
        id: 3,
        nombre: "Susana"
    },
    {
        id: 4,
        nombre: "David"
    }
];

const salarios = [
    {
        id: 1,
        salario: 500.0
    },
    {
        id: 2,
        salario: 900.0
    },
    {
        id: 3,
        salario: 1500.0
    },
];

const getEmpleado = (id) => {
    const promesa = new Promise( (resolve, reject) => {
        const empleado = empleados.find( (e) => e.id === id )?.nombre;
        if (empleado) {
            resolve(empleado) ;
        } else {
            reject( `El empleado con id ${id} no existe.`);
        }

    } );
    return promesa;
};

const getSalario = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const salario = salarios.find( (s) => s.id === id )?.salario;
        if (salario) {
            resolve(salario) ;
        } else {
            reject( `El empleado con id ${id} no tiene salario.`);
        }
    });
    return promesa;
};

let id = 5;

getEmpleado(id).then( (empleado) => {
    getSalario(id).then( (salario) => {
        console.log(`El empleado ${empleado} gana ${salario}`);
    } ).catch( (err) => { console.log(err); } );
} ).catch((err) => { console.log(err); } );