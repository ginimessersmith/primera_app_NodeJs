//import * as fs from 'node:fs';
//import { Buffer } from 'node:buffer';

const { crearTabla } = require("./helpers/multiplicacion")
const {argv}=require('./config/yargs')
const colors = require('colors');

//import { writeFile } from 'node:fs';
//const base=4


//`console.log(process.argv)


//const [, , arg3 = 'base=1'] = process.argv
//const [, base = 1] = arg3.split('=')//? desestructura el string en dos partes, dividiendose donde haya =
//console.log(arg3)
crearTabla(argv.bs,argv.l,argv.op)
    .then(archivo => console.log(colors.cyan('se creo el archivo con exito')))
    .catch(erro => console.log(erro))





