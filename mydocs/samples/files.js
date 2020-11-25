/*
var dirname='mydocs';
var filename='myfile';
const path = require('path');
const fs = require('fs');

var dirpath= path.join(__dirname,dirname);
console.log(`Requested path ${dirpath} \n`);
var filepathtoread =path.join(__dirname,dirname,filename);
fs.readFile(filepathtoread,{encoding:'utf-8'},(err,content)=>{
    if(err){
        console.log(`Can not read file ${filepathtoread} \n`);
        console.log(err);
    }
    else{
        console.log('file content :\n');
        console.log(content);
    }
});
*/

/*
fs.mkdir(dirpath,{},(err)=>{
    if(err){
        console.log("faile create a directory \n");
        console.log(err);
    }
    else{
        console.log(`directory created at : ${dirpath} \n`);
        console.log("create a file... \n");
        fs.appendFile(path.join(dirpath,filename),"Hello from fs lib \n",(err,data)=>{
            if(err){
                console.log("fail create file..");
            }
            else{
                console.log(`File created successfully ${data} \n`);
            }
        });
    }
});
*/