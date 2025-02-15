import fs from 'fs';

//leer el archivo de manera asincrona

fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:', data);

});

//escribir en nuevo archivo
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');
});


//Renombrar un archivo
fs.rename('./data/newfile.txt', 'modifiedFile.text' , (err) => {
    if (err) throw err;
    console.log('Archivo renombrado');
});

