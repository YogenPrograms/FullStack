
import { useEffect,useState } from "react"
export default function Getm()
{
    const [data,setData]=useState([])
useEffect(()=>
{
    fetch("https://fakestoreapi.com/products").then((result)=>{
        result.json().then((resp)=>{
            console.warn("result",resp)
            setData(resp)

        })
    })

},[]
)
console.warn(data)
    return(
<div>
    <h4> Get api call</h4>
    <table border='1'>
        <tr>
            <td>Price            </td>
        </tr>
{
data.map((item)=>
<tr>
    <td>{item.price}</td>
</tr>
)

}
        </table>
    
</div>

    )

}