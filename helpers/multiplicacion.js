const fs = require('fs');
const colors = require('colors');

const crearTablaMultiplicar = async (num, listar,operador) => {



    // return new Promise((resolve, reject) => {
    //     salida = ''
    //     for (let i = 1; i <= 10; i++) {
    //         salida = salida + `${num} X ${i} = ${num * i}\n`
    //     }
    //     console.log(salida)
    //         resolve(fs.writeFileSync('tabla-de-mult.txt', salida))

    // })
    //? otra forma, transformando a async
    try {
        consola = ''
        salida = ''
        for (let i = 1; i <= operador; i++) {
            consola = consola + `${colors.bgRed(num)} ${colors.cyan('X')} ${i} = ${num * i}\n`
            salida = salida + `${(num)} ${('X')} ${i} = ${num * i}\n`
        }

        if (listar) {
            console.log(consola)
        }
        fs.writeFileSync(`./salida/tabla-de-mult del ${num}.txt`, salida)
    } catch (error) {
        throw error
    }


}

module.exports = { crearTabla: crearTablaMultiplicar }