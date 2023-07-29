import { useState } from 'react';
import { Button } from "react-bootstrap";


function Abc()
{
    const [data, setPrint1]= useState(null)
    const [data1, setPrint2]= useState(false)
    function xyz(val)

    {
console.warn(val.target.value)
setPrint1(val.target.value)

    }
return(
<div>
<h3>smallHeading</h3>
{
data1?
<label>{data}</label>
:null
}

<input type="inputbox" onChange={xyz}/>
<div>
<Button variant="primary" onClick={()=>setPrint2(true)}>Page2 Button</Button>

</div>

</div>

)



}
export default Abc