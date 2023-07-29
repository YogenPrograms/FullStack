import { useState,useEffect } from "react"
import { Table } from "react-bootstrap"

export default function GetC()
{
const [data,setData]=useState([])

async function getData()
{
let result= await fetch("https://fakestoreapi.com/products")
result= await result.json()
setData(result)

}
getData()

return(
    <div>
        <h2>This is the table</h2>
        <Table border="1"striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Price</th>
         
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>
        <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        
      </tr>

        )}
        
        </tbody>

        </Table>
    </div>
)

}