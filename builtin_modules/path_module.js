// importing path module using require() method
const path=require('path');

//assigning a path to the my path variable
const myPath='C:\Users\Prajwal Bhattarai\Desktop\nodejs\node_basics\builtin_modules\path_module.js';

const pathInfo=
{
    fileName:path.basename(myPath),
    folderName:path.dirname(myPath),
    fileExtension:path.extname(myPath),
    absoluteOrNot:path.isAbsolute(myPath),
    detailInfo:path.parse(myPath),
}

console.log(pathInfo);
console.log(path.sep);
console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt'))
console.log(path.resolve('grandParentFolder', 'parentFolder', 'child.txt'))

