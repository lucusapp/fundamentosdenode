//requireds nativo de NODEJS
//const fs = require('fs');

const multiplicar= require ('./multiplicar/multiplicar');
let base = 5

console.log(multiplicar)
// crearArchivo(base)
//             .then (archivo => console.log(`Archivo creado: ${archivo}`))
//             .catch(e=>console.log(e))

// let data = ''


// for (let i=1; i<=10; i++){
//     data+=(`${base} * ${i} = ${base * i}\n`);
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`el archivo tabla- ${base} ha sido creado`);
//   });