const{Router}=require('express');
const router = Router();


const{getSustainableImporter}=require ('./db');

router.get('/get',getSustainableImporter);

module.exports=router;