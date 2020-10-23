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

app.get('/net/:combinaciones',async(req,res)=>{
    try{
        console.log("entre 2")
        //const{Product,iteration,scenathon_id,column}=JSON.parse(req.params.combinaciones).select;
       //console.log(iteration)
        //console.log(scenathon_id)

        //console.log(Product)
        //console.log(column)
        //Product='abaca';
        //iteration=4;
        //scenathon_id='6';
        //column="Import_quantity";
if(column=="Import_quantity"){
    var query='SELECT "name", "iteration","scenathon_id", "Product", "Year", "Import_quantity" FROM nettrade WHERE "Product"=$1 AND "iteration"=$2 AND "scenathon_id"=$3';
}else{
    var query ='SELECT "name", "iteration","scenathon_id", "Product", "Year", "Export_quantity" FROM nettrade WHERE "Product"=$1 AND "iteration"=$2 AND "scenathon_id"=$3';
}
const response=await pool.query(query,[Product,iteration,scenathon_id]);
res.send(response)
res.status(200).json(response.rows);
//res.send(response);



}catch(err){
console.log(err);
}
});




