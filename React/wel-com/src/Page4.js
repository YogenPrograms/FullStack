import { Button } from "react-bootstrap"
import { useState } from "react"

function M3()
{
    const [data,setData]=useState([])
    const [data1,setData1]=useState(false)
    function CallM3(e)
{
setData(e.target.value)


console.warn(data)


}
return(
<div>
   
   
<h3>Page4 
{
 data1?
<h3>{data}</h3>
:
null
}

</h3>

<input type="inputBox" id="text" onChange={CallM3}/>
<Button variant="success" onClick={()=>setData1(true)} >Click to submit</Button>

</div>
)
}

export default M3