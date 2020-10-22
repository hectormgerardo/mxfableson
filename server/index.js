const express = require('express');
const app= express();
const cors =require("cors");
const pool =require('./db');



app.use(cors());

//servira para reconocer el objeto de solicitud entrante como un objeto JSON
//(middleware)
app.use(express.json());


//build routes with PostgreSQL queries
app.listen(5000,()=>{
    console.log("escuchando el puerto 5000");
});

//routes

app.get('/net',async(req,res)=>{
    try{
        const{iteration,scenathon_id,name,Product,Year}=req.body;
const response = await pool.query('SELECT "name", "iteration","scenathon_id", "Product", "Year", "Export_quantity","Import_quantity" FROM nettrade WHERE "iteration"=$1 AND "scenathon_id"=$2 ',[1,6]);
res.status(200).json(response.rows);
//res.send(response);
}catch(err){
res.send('ola')
}
});




