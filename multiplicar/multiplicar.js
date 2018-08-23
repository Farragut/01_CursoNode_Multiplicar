//require   
const fs = require('fs');
const colors = require('colors');

//logic

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`filesTablas/tablaMultiplicar${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tablaMultiplicar${base}.txt`);
        });
    });
}


let listarTabla = (base, limite) => {
    if (!Number(base)) {
        reject('La base no es un numero');
        return;
    } else {
        console.log('===================='.green);
        console.log(`Tabla de ${base}`.green);
        console.log('===================='.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}\n`);
        }
    }
}

//exports

module.exports = {
    crearArchivo,
    listarTabla
}