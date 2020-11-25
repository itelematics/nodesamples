const moment=require('moment');

var loggerMidllware= (req,res,next)=>{
    console.log(`Request arraived @ ${req.url} ${moment().format()}`);
    next();
    console.log(` Request Processed `);
};

module.exports={
    loggerMW:loggerMidllware
};