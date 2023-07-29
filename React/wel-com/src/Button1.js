import {Button} from 'react-bootstrap';
import {useState} from 'react';
 function ButtonClick()
{
    const [data1, setData]= useState(0)
    function alert1()
    {
        setData (data1+1)
    }
    return(

<div>
    <label> {data1}</label>
<input readOnly type ="text" id="userName" value ={data1} name="userName"/> 
<Button variant="success" onClick={alert1}>Change button</Button>
</div>

    );

}
export default ButtonClick;






