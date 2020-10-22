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
       
        const{Product,iteration,scenathon_id,column}=JSON.parse(req.params.combinaciones).select;
       console.log(iteration)
        console.log(scenathon_id)

        console.log(Product)
        console.log(column)
const response = await pool.query('SELECT * FROM nettrade LIMIT 100' ); 
res.status(200).json(response.rows);
//res.send(response);

}catch(err){
console.log(err);
}
});




