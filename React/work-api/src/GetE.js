import { useState,useEffect } from "react"
import { Table } from "react-bootstrap"

export default function GetE()
{
const[data,setData]=useState([])
const[title,setTitle]=useState([])
const[age,setAge]=useState([])
const[address,setAddress]=useState([])
useEffect(()=>
{


    getData()

},[]
)
async function getData()
{
let result=await fetch("http://localhost:3000/apis/")
result=await result.json()
setData(result)

}
async function addPro()
{
    console.warn({title,age,address})
    let pro={title,age,address}
   
    // const formData= new FormData
// formData.append('title',title)
// formData.append('age',age)
// formData.append('address',address)
let result =await fetch("http://localhost:3000/apis/",
{
 method:'POST',
 headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
 },
 body:JSON.stringify(pro)
   
},[]
)
getData()

}
console.warn(data)

    return(
<div>
    <h2> This is Table</h2>
    <input type="text" placeholder="Enter text" onChange={((e)=>setTitle(e.target.value))}/>
    <br/>
    <input type="text" placeholder="Enter text" onChange={((e)=>setAge(e.target.value))}/>
    <br/>
    <input type="text" placeholder="Enter text" onChange={((e)=>setAddress(e.target.value))}/>
    <br/>
    <button onClick={addPro}>Add</button>


    <Table border="1"striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Age</th>
          <th>Address</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>
        <tr>
          <td>{item.title}</td>
          <td>{item.age}</td>
          <td>{item.address}</td>
          
        </tr>
        )}
        </tbody>
        </Table>


</div>

    )
}