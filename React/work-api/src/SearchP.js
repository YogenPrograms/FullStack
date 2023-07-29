
import { useState } from 'react'
import {Table} from 'react-bootstrap'
 export default function SearchP()
{
const [data, setData]=useState([])
    async function Datasearch(key)
    {
let result=await fetch("http://localhost:3000/apis?q="+key)
result=await result.json()
setData(result)
    }

    return(
<div>

    <h4> Search your text here</h4>

<input type="text" placeholder="Search text" onChange={(e)=>Datasearch(e.target.value)}/>
{
    data.length>0?
    <Table border ="1"striped bordered hover>
    <thead>
      <tr>
        
        <th>Title</th>
        <th>Age</th>
        <th>Address</th>
        
      </tr>
    </thead>
    <tbody>
      {data.map((item)=>
      
      <tr >
       
        <td>{item.title}</td>
        <td>{item.age}</td>
        <td>{item.address}</td>
       
      </tr>
      )}
      </tbody>
      </Table>
      :
      null
}
</div>

    )
}