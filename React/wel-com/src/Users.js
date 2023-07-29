
import {useState} from 'react'
function Method1()
{
const [data,setData]=useState(0)
    function getData()
    {
        setData (data+1)

    }
    return(
<div className="method1">

<h1> {data}</h1>
<button onClick={getData}>changeName</button>

</div>
    );
}
export default Method1;