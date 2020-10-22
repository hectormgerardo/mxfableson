const express = require('express');
const app= express();
const cors =require("cors");
const pool = require("./db")


app.use(cors());

//servira para reconocer el objeto de solicitud entrante como un objeto JSON
//(middleware)
app.use(express.json());


//build routes with PostgreSQL queries
app.listen(5000,()=>{
    console.log("escuchando el puerto 5000");
});

//queries

const getSustainableImporter= async(req,res)=>
{
    const{iteration,product}=req.body;
    const response = await pool.query('select * from nettrade limit 50');
    res.status(200).json(response.rows);
}
