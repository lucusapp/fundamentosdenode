//requireds nativo de NODEJS
//const fs = require('fs');

const {crearArchivo}= require ('./multiplicar/multiplicar');

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]

//console.log(base)


crearArchivo(base)
            .then (archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e=>console.log(e))

// let data = ''


// for (let i=1; i<=10; i++){
//     data+=(`${base} * ${i} = ${base * i}\n`);
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`el archivo tabla- ${base} ha sido creado`);
//   });