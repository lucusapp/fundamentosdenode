const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
        }  
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }  
    })

    .help()
    .argv;


const {crearArchivo,listarTabla}= require ('./multiplicar/multiplicar');

console.log(argv)

    let comando = argv._[0];

    switch(comando){
        case 'listar':
            listarTabla(argv.base, argv.limite);
        break;

        case 'crear':
            crearArchivo(argv.base, argv.limite)
                        .then (archivo => console.log(`Archivo creado: ${archivo}`))
                        .catch(e=>console.log(e))
        break;

        default:
            console.log('comando no reconocido')
    }




// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

//console.log(base)



// let data = ''


// for (let i=1; i<=10; i++){
//     data+=(`${base} * ${i} = ${base * i}\n`);
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`el archivo tabla- ${base} ha sido creado`);
//   });