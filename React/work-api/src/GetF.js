import { useState,useEffect } from "react"
import { Table } from "react-bootstrap"

export default function GetF()
{
    const [data,setData]=useState([])
    const [title,setTitle]=useState([])
    const[age,setAge]=useState([])
    const[address,setAddress]=useState([])
    useEffect(()=>
    {

        getData()
},[])
async function getData()
{
    let result=await fetch("http://localhost:3000/apis/")
    result= await result.json()
setData(result)

}

console.log(data)
async function dataDelete(id)
{
let result=await fetch(`http://localhost:3000/apis/${id}`,

{
    method:'Delete'
    
},[])
result=await result.json()
getData()
}

async function addProd()
{
    let prod={title, age,address}
    let result=await fetch("http://localhost:3000/apis/",
    {
        method:'POST',
        
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
             },
             body:JSON.stringify(prod)
    
        
    },[])
    getData()
}

    return(

<div>
    <h4>This is table</h4>

    <input type="text" placeholder="Enter title"onChange={(e)=>setTitle(e.target.value)}/><br/>
    <input type="text" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/><br/>
    <input type="text" placeholder="Enter Address" onChange={(e)=>setAddress(e.target.value)}/><br/>
<button onClick={addProd}> Add</button>

    <Table border ="1"striped bordered hover>
      <thead>
        <tr>
          
          <th>Title</th>
          <th>Age</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>
        
        <tr >
         
          <td>{item.title}</td>
          <td>{item.age}</td>
          <td>{item.address}</td>
         <td> <button onClick={()=>dataDelete(item.id)}>Delete</button></td>
        </tr>
        )}
        </tbody>
        </Table>
</div>


    )
}