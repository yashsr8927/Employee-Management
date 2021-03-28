console.log("Hello");
const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const id1 = document.getElementById('SI').value
    const query1 =document.getElementById("QR").value
    const eid1 = document.getElementById("EI").value
    const bon1 = document.getElementById("SB").value

    data12 = {  
            "sales_id":id1,
            "query_resolved":query1,
            "emp_id":eid1,
            "sales_bonus":bon1
    } 
    
    console.log(data12)
    let options = { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json;charset=utf-8' 
        }, 
        body: JSON.stringify(data12) 
    } 

    let fetchRes = fetch('/insertsalesdata',options); 
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