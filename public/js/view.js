console.log("Hello");
const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const id1 = document.getElementById('EI').value

    data12 = {  
            "emp_id":id1,  
             } 

    let options = { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json;charset=utf-8' 
        }, 
        body: JSON.stringify(data12) 
    } 

    let fetchRes = fetch("/ViewRecords",options); 
    fetchRes.then(res => 
        res.json()).then((d) => { 
            if(d.error){
                document.getElementById('p1').innerHTML = "Error : Server side error.Please wait and try again"
            }else{
                if(d !== undefined){
                    console.log("Working")
                    document.getElementById('p1').innerHTML ="Emp_ID:"+d.rows[0][0] + " " +
                    "Name: "+ d.rows[0][1] + " " +
                    "Contact No:"+ d.rows[0][2] + " " +
                    "Designation: "+ d.rows[0][3] + " " +
                    "Salary"+d.rows[0][4]+" " +
                    "Address"+d.rows[0][5] ;

                }else{
                    document.getElementById('p1').innerHTML = 'Opps, Can you please try again?'
                }
            }
        }) 
    
})


