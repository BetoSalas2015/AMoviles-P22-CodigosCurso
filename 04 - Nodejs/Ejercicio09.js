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

let id = 1;

getEmpleado(id)
    .then( (empleado) => { console.log(empleado ); } )
    .catch( (err) => { console.log(err); } );

getSalario(id)
    .then( (salario) => { console.log(salario); })
    .catch( (err) => { console.log(err); } );


