
import {Button} from 'react-bootstrap';
import { useState } from 'react';
function M2()
{
    
    const [data, setData]= useState([])
    const [data1,printData]=useState(false)
    function Childm2(e)
    {

        setData(e.target.value)


    }
return(
<div>
{
    data1?
<h3> {data}</h3>
:
null
}
<input type= "inputbox" name="fname"id="text" onChange={Childm2}/>



<Button variant="success" onClick={()=>printData(true)}> Page3 button</Button>


</div>
)

}
export default M2