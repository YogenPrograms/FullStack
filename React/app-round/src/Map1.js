
import { Table } from "react-bootstrap"
export default function Ma1()
{
    const data=
    [
{name:"Yogen", email:"abc@gmail.com", mobile:"5786"},
{name :"Shri", email:"sh@gmail.com", mobile:"234"},
{name:"Deepak", email:"d@gmail.com", mobile:"123"}

    ]
    
return(

<div>
<h2>Contact table</h2>

    
   
    <Table responsive striped bordered hover size="lg">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        
      </tr>
    </thead>
    
    <tbody>
    {
    data.map((i,b)=>
      i.name === "Yogen"?
      <tr key={b}>
        <td>{i.name}</td>
        <td>{i.email}</td>
        <td>{i.mobile}</td>
        
      </tr>
      :
      null
       )
    }
      
    </tbody>
  </Table>
   
   

</div>

)

}