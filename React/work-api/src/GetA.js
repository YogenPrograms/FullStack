
import { useState,useEffect } from "react"
import { Table } from "react-bootstrap";
export default function GetA()
{
const [data, setData]=useState([]);
useEffect(()=>
{
    async  function fetchData(){
let result=await fetch("https://fakestoreapi.com/products")
result= await result.json()
setData(result)


}
fetchData();
},[])

console.warn("data",data);
return(
<div>

    <h2>Get Api</h2>
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