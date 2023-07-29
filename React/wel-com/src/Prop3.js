
import { Button } from "react-bootstrap"
import { useState } from "react"
function P4(prop)
{
    const [colorB, setColor]=useState("green")
    function ChangeColor(cl)
    {
setColor("blue")
    }

return(
<div>
<h2 style={{color:colorB}}>The name is :{prop.name}</h2>
<h3>The Address is :{prop.Address}</h3>
<h4>Email :{prop.More.email}</h4>
<h4>Mobile :{prop.More.mobile}</h4>
<Button onClick={ChangeColor}>Details</Button>
</div>
)
}
export default P4