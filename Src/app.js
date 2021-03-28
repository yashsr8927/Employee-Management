const express = require('express')
const hbs = require('hbs')
const path = require('path')
const user = require('../Src/Router/userRouter')
const sales = require('../Src/Router/salesRouter')
const app = express()

const pathValue = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../template/views')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
app.use(express.json())
app.use(express.static(pathValue))
app.use(user)
app.use(sales)

// GENERATING PDF





app.get('/UI',(req,res)=>{
    res.render('index',{
        CompanyName:"Yash company"
    })
})
app.get('/update',(req,res)=>{
    res.render('update',{
        data:"Please update employee details"
    })
})

app.get('/delete',(req,res)=>{
    res.render('delete',{
        data:"Delete a record you want to"
    })
})

app.get('/view',(req,res)=>{
        res.render('view',{
            data:"Enter Employee ID to view the record"
        })   
})

app.get('/viewall',(req,res)=>{
    res.render('viewall',{
        CompanyName:"Yash company"
    })
})

 app.get('/saleinsert',(req,res)=>{
     res.render('saleinsert',{
         data:"Please Insert Sale Data"
     })
 })
module.exports = app;

const port1 = 3001
app.listen(port1,()=>{
    console.log(`Server is running on port ${port1}`);
})