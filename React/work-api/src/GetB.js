import { useState,useEffect } from "react"
import { Table } from "react-bootstrap"


export default function GetB()
{
const [data,setData]=useState([])

useEffect(()=>{
    async function getData()
    {
let result=await fetch("https://fakestoreapi.com/products")
result= await result.json();
setData(result)

    }
    getData() 

},[])



console.warn(data)
return(
<div>

    <h2>This is table</h2>
    <Table border="1">
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        
            {data.map((item)=>
        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.description}</td>
        </tr> )
            }

        </tbody>
    </Table>
</div>

)

}