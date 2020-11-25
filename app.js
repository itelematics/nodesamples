const express= require('express');
const path =require('path');
const url =require('url');
const apiRouter=require
const loggerMW =require('./loggermw');

let app =express();

//add binding mw
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(loggerMW.loggerMW);
app.use('/api/persons',require('./routes/api/persons'));
app.use(express.static(path.join(__dirname,'public')));

/*app.get("/",(rq,rs)=>{
    var f=path.join(__dirname,"html","index.html");
    rs.sendFile(f);
});*/

const port = process.env.PORT || 8082;
app.listen(port,()=> console.log('Server Started..\n'));