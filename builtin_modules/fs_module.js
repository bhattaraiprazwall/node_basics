//........creating a directory using fs.mkdir()

// ........importing fs module
const fs=require('fs');

//........present working directory: C:\Users\Prajwal Bhattarai\Desktop\nodejs\node_basics\builtin_modules
//........making a new directory called: ./MyFolder

// fs.mkdir('./MyFolder',(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log("Folder created successfully..");
//     }
// })


//.........creating and writing to a file asychronously using fs.writeFile() ........
// const fs=require('fs');
// const data="hello , this is prajwal bhattarai";
// fs.writeFile('./MyFolder/myFile.txt',data,{flag:'a'},(err)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     else
//     {
//         console.log('Written to file successfully');
//     }
// })


//....reading a file ashynchronously using fs.readFile()......
// const fs=require('fs');
// fs.readFile('./MyFolder/myFile.txt',{encoding:'utf-8'},(err,data)=>
// {
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log("file read successfully ! here is the data");
//         console.log(data);
//     }
// })



// ........reading and writing to a file synchronously.......
// try
// {
//     //writing to a file synchronously
//     const data='hello this is asynchronous method.'
//     fs.writeFileSync('./myFolder/myFileSync.txt',data);
//     console.log("write operation successful..");

//     //reading to a file synchronously
//     const fileData=fs.readFileSync('./myFolder/myFileSync.txt','utf-8');
//     console.log('Read operation successful, here is the data  : ');
//     console.log(fileData);
// }catch(err)
// {
//     console.log('error occured');
//     console.log(err);
// }

//.......reading the contents of the directory using fs.readdir()

// fs.readdir('./MyFolder',(err,files)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     else{
//         console.log("directory read successfully, here are the files : ");
//         console.log(files);
//     }
// })


//..........renaming a file using fs.rename()

// fs.rename('./MyFolder/myFile.txt','./MyFolder/newFileAsync.txt',(err)=>
// {
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log("File renamed successfully");
// })


//.........deleting a file using fs.unlink()

// const fs = require('fs');

// fs.unlink('./myFolder/myFileSync.txt', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('File Deleted Successfully!')
// })
