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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id )?.nombre;
    if (empleado) {
        callback(null, empleado) ;
    } else {
        callback( `El empleado con id ${id} no existe.`);
    }
    
};

const getSalario = (id, callback) => {
    const salario = salarios.find( (s) => s.id === id )?.salario;
    if (salario) {
        callback(null, salario) ;
    } else {
        callback( `El empleado con id ${id} no tiene salario.`);
    }
    
};

let id = 3;

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log( err );
    } else {
        console.log(`Empleado ${id}: ${empleado}` );
    }

} ); 
getSalario(id, (err, salario) => {
    if (err) {
        console.log( err );
    } else {
        console.log(`Empleado ${id}: ${salario}` );
    }

} ); 

