// Callbacks

let getUsuarioByID = (id, callback) => {
    let usuario = {
        nombre: 'Roberto',
        id
    }
    if(id === 20) {
        console.log(`El usuario con id ${id} no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }
};

getUsuarioByID(20, (err, usuario) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Usuario en la bases datos: ', usuario);
    }
});

