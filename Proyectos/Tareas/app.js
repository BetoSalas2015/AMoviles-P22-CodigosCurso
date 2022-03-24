require('colors');

const {menu,pausa}  = require('./js/menu');

const main = async() => {

    let opc = '0';
    do {
        opc = await menu();
        console.log(opc);
        await pausa();
    } while (opc !== '0');
    
    

}

main();