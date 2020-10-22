//create a new pool with configuration:
const Pool = require('pg');

const pool = new Pool({
'user':'scenathon_dev_db',
'password':'Bbq4q5ccHN3V09VK8laJ9uMXBh',
'host':'scenathon-db.cloud.geo-wiki.org',
'port': '3456',
'database':'scenathon_dev_db'

});

const getSustainableImporter= async(req,res)=>
{
    const{iteration,product}=req.body;
    const response = await pool.query('select * from nettrade limit 50');
    res.status(200).json(response.rows);
    
}

module.exports={getSustainableImporter};
