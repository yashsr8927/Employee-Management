const express = require('express')
const router =new express.Router()
const oracledb = require('oracledb')

router.post('/insertsalesdata',async (req,res)=>{
    try{
        console.log("I'am post")
        const userbody = await req.body
        console.log(userbody)
        connection = await oracledb.getConnection({
            user: "c##admin",
            password: "admin",
            connectString: "localhost:1521/orcl"
             });

async function insertIntoTable(sales_id,query_resolved,emp_id,sales_bonus)
    {
    const query=`insert into sales (sales_id,query_resolved,emp_id,sales_bonus) values (:0,:1,:2,:3)`;
    var binds=[sales_id,query_resolved,emp_id,sales_bonus];
    result = await connection.execute(query , binds, {autoCommit:true}); 
    }
  await insertIntoTable(userbody.sales_id,userbody.query_resolved,userbody.emp_id,userbody.sales_bonus)
  await connection.close()
  res.status(200).send(result)

} catch(err) {
        res.status(400).send(err)
  } 

})
module.exports = router