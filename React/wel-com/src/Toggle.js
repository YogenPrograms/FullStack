
import { Button } from "react-bootstrap"
import { useState } from "react"

function T1()
{

const [toggle, setToggle]=useState(true)
return(

<div>
{
    toggle?
<h2>Thakur</h2>
:
null
}
<Button onClick={()=>setToggle(!toggle)}>Toggle</Button>

</div>

)
}
export default T1