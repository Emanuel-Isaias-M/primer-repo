import path from 'path';

//definir una ruta de archivo de ejemplo

const  filePath = './data/example.txt';

//obtener el directorio de base
const dirName = path.dirname(filePath);
console.log('directorio base: ', dirName);


//obtener el nombre del archivo sin estesion
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

//obtener la extension del archivo
const extName = path.extname(filePath);
console.log('Extension del archivo', extName);

//crear una ruta unida
const newPath = path.join('/user', ' docs', 'newfile.txt');
console.log('Nueva ruta:', newPath);

