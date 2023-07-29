import { useState } from 'react';
import {Button} from 'react-bootstrap';


 function M1()
{
    const [data,printData]=useState(0)
function run1()
{
   printData(data+1);
}


    return(

<div>
<h3> counter{data}</h3>
<input readOnly type="text" id="textBox"/>
<div className="btn btn-primary">

<Button onClick={()=>run1()}>Click me</Button>
</div>
</div>
    );
}
export default M1