import { useState,useEffect } from "react"


function E2()
{
    const [count, setCount]=useState(0)
    const [count1, setCount1]=useState(0)
    useEffect(()=>
    {
console.warn("useEffect running")

    },[count]
    )

    
    function Ct1()
    {
        setCount(count+1)
        setCount1(count1+1)
    }

return(

<div>
<h2>counter : {count}:{count1}</h2>
<button onClick={Ct1}>Run</button>

</div>

)

}
export default E2