
import { useSearchParams } from "react-router-dom"
import { useRef ,useState} from "react";
export default function Fil()
{
    const inputRef= useRef(null)
    const inputCity=useRef(null)
    const [searchParams, setSearchParams]=useSearchParams();
    const [age1,setAge]=useState()
    const[city1,setCity]=useState()
    
    const age=searchParams.get('age')
    const city=searchParams.get('city')
    const handleInput=()=>
    {
        setAge(inputRef.current.value)
        setCity(inputCity.current.value)
    }
    return(
<div>
    <h2> This is filter</h2>
    <h4> Age is :{age1}</h4>
    <h4> City is :{city1}</h4>
    {/* <input type="text" placeholder="Enter the Age"onChange={(e)=>setAge(e.target.value)}></input> */}
    <input ref={inputRef}type="text" placeholder="Enter the Age"></input>
    <input ref={inputCity}type="text" placeholder="Enter the City"></input>
    {/* <button onClick={()=>setSearchParams({age:"50",city:"Hasanpur"})}> change</button> */}
    <button onClick={handleInput}> Onclick</button>
</div>

    )
}