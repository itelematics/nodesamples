const path = require('path');
const fs = require('fs');
function processFile(filename,resp){

  return  fs.readFile(path.join(__dirname,"html",filename)
    ,{encoding:'utf-8'}
    ,(err,content)=>{
        if(err){
            resp.statusCode=200;
            resp.writeHead(200,{'Contet-Type':"text/html"});
            resp.write("<h1>Error Processing Your Requeste</h1>");
            resp.end("<p>Page Not Found!</p>");
        }
        else{
            resp.writeHead(200,{"Content-Type":"text/html"});
            resp.end(content);
        }
    });
}

module.exports=processFile;