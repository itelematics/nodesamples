const { Router } = require('express');
const express =require('express');
const persons=require('../../personcars');
const uuid = require('uuid');
const routes =express.Router();

routes.get('/:id',(req,res)=>{
    var result = persons.filter(m=> m.id === parseInt(req.params.id));
    if(result.length<=0){
        res.status(400)
        .json({message:`Person with id ${req.params.id} not found `});
    }
    else{
        res.json(result);
    }
});
routes.get('/',(req,res)=>{
    res.json(persons);
});
routes.post('/',(req,resp)=>{
    var maxid=persons.sort((c1,c2)=>c1.id>c2.id).pop().id;

    var person = {
        id:uuid.v4(),
        name:req.body.name,
        age:req.body.age
    };

});
module.exports=routes;