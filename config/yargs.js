const argv = require('yargs')
    .option('bs', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'es la base a multiplicar'
    })
    .option('op', {
        alias: 'operador',
        type: 'number',
        demandOption: true,
        describe:'operador del 1 hasta X'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe:'mostrar o no en una lista la tabla de multiplicar'
    })
    .check((argv,option)=>{
        if(isNaN(argv.bs)){
            throw 'la base debe ser un numero'
        }
        return true
    })
    .argv

module.exports={argv}