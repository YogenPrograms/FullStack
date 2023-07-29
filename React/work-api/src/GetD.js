import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

export default function GetD()
{
const[data,setData]=useState([])
useEffect(()=>
{
async function getData()
{
  let result=await fetch("https://fakestoreapi.com/products")  
 // let result=await fetch("http://localhost:3000/apis/")  
result= await result.json()
setData(result)

}
getData()


},[]

)

console.warn(data)

    return(
        <div>

            <h2>This is the table</h2>
            <Table border="1"striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>

        {data.map((item)=>
        <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td><img src={item.image}/></td>
      </tr>
        
        )}
        </tbody>
        </Table>
        </div>
    )
}