const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(process.argv);

// let arvg2 = process.argv;
// let parametro = arvg[2];
// let base = parametro.split('=')[1]

let commando = argv._[0];

switch (commando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ archivo }`))
            .catch(e => console.log(e));
        break;


    default:
        console.log('Comnado no reconocido');
        break;
}