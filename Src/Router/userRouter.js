const express = require('express')
const router =new express.Router()
const oracledb = require('oracledb')
var db=require('../Database/Connect');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();

/*
//New View Route
router.get('/emp-list', function(req, res) {
try {
    connection = await oracledb.getConnection( {
      user          : "c##admin",
      password      : "admin",
      connectString : "localhost:1521/orcl"
    });
        console.log('Connected to Database');
        var sql='SELECT * FROM management';
        db.query(sql, function (err, data) {
        if (err) throw err;
        res.render('user-list', { title: 'User List', userData: data})
        }
 } catch(err) {
    console.log('Error in processing:\n', err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch(err) {
        console.log('Error in closing connection:\n', err);
      }
    }
  }

    var sql='SELECT * FROM management';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});
*/

router.get('/viewAllRecords',async (req,res)=>{
    try{
        const userbody =req.body
        console.log("view workingg")
        console.log(userbody)
        connection = await oracledb.getConnection({
        user: "c##admin",
        password: "admin",
        connectString: "localhost:1521/orcl"
         });
         console.log('connect to database')
        result = await connection.execute(`SELECT * FROM management`)
         await connection.close()
         //res.render('employee-list', { title: 'Employee List', userData: data})
       res.send({
           'data':result
        })
    }catch(e){
        console.log('Server error, please check  userrouter file.')
    }
})


router.post('/ViewRecords',async (req,res)=>{
    try{
        const userbody = await req.body;
        //console.log(userbody)
        connection = await oracledb.getConnection({
            user: "c##admin",
            password: "admin",
            connectString: "localhost:1521/orcl"
             });
    async function viewable(emp_id)
        {
            
            const query=`select * from management where emp_id =(:0)`;
            var binds=[emp_id];
            result = await connection.execute(query , binds, {autoCommit:true}); 
         }
    await viewable(userbody.emp_id)
    await connection.close()
    
    //console.log(result)
    res.status(200).send(result)
  //  doc.result(fs.createWriteStream('output.pdf'));
    }
    catch(e)  
    {
        res.status(400).send(e)
    }
})


router.delete('/deleteUserData',async (req,res)=>{
    console.log("DELETEEEEEEEEEE")
    try{
        const userbody = await req.body
        connection = await oracledb.getConnection({
            user: "c##admin",
            password: "admin",
            connectString: "localhost:1521/orcl"
             });
        async function DeleteEmp(emp_id)
         {
             const query=`delete from management where emp_id=(:0)`;
             var binds=[emp_id];
            result = await connection.execute(query , binds, {autoCommit:true}); 
         }
         await DeleteEmp(userbody.emp_id)
        await  connection.close()
        console.log(result) 
        res.send(result) 
    }
    catch(e){
        res.status(400).send()
    }
})


router.put('/UpdateUserData',async (req,res)=>{
    try{
        console.log("i'm put")
        const userbody = await req.body;
        console.log(userbody)
        connection = await oracledb.getConnection({
            user: "c##admin",
            password: "admin",
            connectString: "localhost:1521/orcl"
             });
    async function updatetable(emp_name,emp_contactno,emp_designation,emp_salary,emp_address,emp_id)
        {
            
            const query=`update management set emp_name=(:1),
                            emp_contactno=(:2),
                            emp_designation = (:3),
                            emp_salary=(:4),
                            emp_address=(:5)
                             where emp_id = (:6)`;
            var binds=[emp_name,emp_contactno,emp_designation,emp_salary,emp_address,emp_id];
            result = await connection.execute(query , binds, {autoCommit:true}); 
         }
    await updatetable(userbody.emp_name,userbody.emp_contactno,userbody.emp_designation,userbody.emp_salary,userbody.emp_address,userbody.emp_id)
    await connection.close()
    res.status(200).send(result)
    }
    catch(e)  
    {
        res.status(400).send(e)
    }
})

router.post('/insertuserdata',async (req,res)=>{
    try{
        console.log("I'am post")
        const userbody = await req.body
        console.log(userbody)
        connection = await oracledb.getConnection({
            user: "c##admin",
            password: "admin",
            connectString: "localhost:1521/orcl"
             });

async function insertIntoTable(emp_id,emp_name,emp_contactno,emp_designation,emp_salary,emp_address)
    {
    const query=`insert into management (emp_id,emp_name,emp_contactno,emp_designation,emp_salary,emp_address) values (:0,:1,:2,:3,:4,:5)`;
    var binds=[emp_id,emp_name,emp_contactno,emp_designation,emp_salary,emp_address];
    result = await connection.execute(query , binds, {autoCommit:true}); 
    }
  await insertIntoTable(userbody.emp_id,userbody.emp_name,userbody.emp_contactno,userbody.emp_designation,userbody.emp_salary,userbody.emp_address)
  await connection.close()
  res.status(200).send(result)

} catch(err) {
        res.status(400).send(err)
  } 

})

module.exports = router