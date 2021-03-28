console.log("Hello");
const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const id1 = document.getElementById('EI').value
    const name1 =document.getElementById("EN").value
    const job1 = document.getElementById("EJ").value
    const con1 = document.getElementById("EC").value
    const sal1 = document.getElementById("ES").value
    const add1 = document.getElementById("EA").value
   // const mainid = id1
   // const mainname = name1
    //const mainco = con1
    //const mainjob =job1

    data12 = {  
            "emp_id":id1,
            "emp_name":name1,
            "emp_designation":job1,
            "emp_contactno":con1,
            "emp_salary":sal1,
            "emp_address":add1
    } 
    
    console.log(data12)
    let options = { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json;charset=utf-8' 
        }, 
        body: JSON.stringify(data12) 
    } 

    let fetchRes = fetch('/insertuserdata',options); 
    fetchRes.then(res => 
        res.json()).then((d) => { 
            if(d.error){
                document.getElementById('p1').innerHTML = "Error : Server side error.Please wait and try again"
            }else{
                if(d !== undefined){
                alert ("Successfully Inserted")
                document.getElementById('p1').innerHTML = "Successfully inserted";
                }else{
                    document.getElementById('p1').innerHTML = 'Opps, Can you please try again?'
                }
            }
        }) 
    
})