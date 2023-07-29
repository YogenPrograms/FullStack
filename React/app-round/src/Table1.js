import { Table } from "react-bootstrap"

export default function Ta1(props)
{

return(
<div>
<Table striped bordered hover>
      <thead>
        <tr>
         <th>First Name</th>
          <th>Age</th>
          <th>Mobile</th>
          <th>Address</th>
        </tr>
      </thead>
      
      <tbody>
       {props.data.map((item,i)=>
          <tr key={i}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.mobile}</td>
          <td>
          <tbody>
            {item.other.map((x,y)=>
            <tr key={y}>
            <td>{x.address1}</td>
            <td>{x.address2}</td>
            </tr>
            )}
            </tbody>
           
          </td>
        </tr>
        )
       }
      </tbody>
    </Table>

</div>
)
}