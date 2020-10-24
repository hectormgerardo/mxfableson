const express = require('express');
const app= express();
const cors =require("cors");
const pool =require('./db');
const { json } = require('express');



app.use(cors());

//servira para reconocer el objeto de solicitud entrante como un objeto JSON
//(middleware)
app.use(express.json());


//build routes with PostgreSQL queries
app.listen(5000,()=>{
    console.log("escuchando el puerto 5000");
});

//routes

app.get('/net/:combinaciones',async(req,res)=>{
    try{
        
        const{Product,iteration,scenathon_id,column}=JSON.parse(req.params.combinaciones).select;
    

if(column=="Import_quantity"){
    var query='SELECT "name",   "Year", "Import_quantity" FROM nettrade WHERE "Product"=$1 AND "iteration"=$2 AND "scenathon_id"=$3  ORDER BY "name","Year" ASC  ';
}else{
    var query='SELECT "name", "Year", "Export_quantity" FROM nettrade WHERE "Product"=$1 AND "iteration"=$2 AND "scenathon_id"=$3  ORDER BY "name","Year" ASC ';
}
const response=await pool.query(query,[Product,iteration,scenathon_id]);

res.status(200).json(response.rows)



}catch(err){
console.error(err.message);
}
});



