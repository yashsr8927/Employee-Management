console.log("Hello");
const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const en1 = document.getElementById("EI").value
    const name1 = document.getElementById("EN").value
    const con1=document.getElementById("EC").value
    const job1 = document.getElementById("EJ").value
    const sal1=document.getElementById("ES").value
    const add1=document.getElementById("EA").value

    data12 = {  
            
            "emp_id":en1,
            "emp_name":name1,
            "emp_contactno":con1,
            "emp_designation":job1,
            "emp_salary":sal1,
            "emp_address":add1
            
    } 
    
    console.log(data12)
    let options = { 
        method: 'PUT', 
        headers: { 
            'Content-Type': 'application/json;charset=utf-8' 
        }, 
        body: JSON.stringify(data12) 
    } 

    let fetchRes = fetch('/UpdateUserData',options); 
    fetchRes.then(res => 
        res.json()).then((d) => { 
            if(d.error){
                document.getElementById('p1').innerHTML = "Error : Server side error.Please wait and try again"
            }else{
                if(d !== undefined){
                    alert ("Successfully Updated")
                document.getElementById('p1').innerHTML = "Successfully updated";
                }else{
                    document.getElementById('p1').innerHTML = 'Opps, Can you please try again?'
                }
            }
        }) 
    
})