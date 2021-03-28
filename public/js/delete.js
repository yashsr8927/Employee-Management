console.log("Hello");
const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const en1 = document.getElementById("EI").value


    data12 = {  
            
            "emp_id":en1,
            
    } 
    
    console.log(data12)
    let options = { 
        method: 'DELETE', 
        headers: { 
            'Content-Type': 'application/json;charset=utf-8' 
        }, 
        body: JSON.stringify(data12) 
    } 

    let fetchRes = fetch('/deleteUserData',options); 
    fetchRes.then(res => 
        res.json()).then((d) => { 
            if(d.error){
                document.getElementById('p1').innerHTML = "Error : Server side error.Please wait and try again"
            }else{
                if(d !== undefined){
                    alert ("Successfully Deleted")
                document.getElementById('p1').innerHTML = "Successfully Deleted";
                }else{
                    document.getElementById('p1').innerHTML = 'Opps, Can you please try again?'
                }
            }
        }) 
    
})