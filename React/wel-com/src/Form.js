import { Button } from "react-bootstrap"
import { useState } from "react"

function F1()
{
    const [name,setName]=useState("")
    const[sel,setSel]=useState("")
    const[check,setCheck]=useState(false)
    const[lab,setLab]=useState(false)

    function getFormData(e)
    {
console.warn(name,sel,check)
e.preventDefault()
setLab(true)

    }
    
    
return(
<div>
    
<br/>
<h2> Fill below form</h2><br/>

{
lab?
<div>
<h4>{name}</h4>
<h4>{sel}</h4>
<h4>{check}</h4>

</div>
:
null

}
 

<form onSubmit={getFormData}>
    
    <input type="text" placeholder="Enter the name"onChange={(f)=>setName(f.target.value) } /><br/><br/>
    <select onChange={(f)=>setSel(f.target.value)}>
    <option>Select the option</option>
    <option>First Option</option>
    <option>Second Option</option>
    </select><br/><br/>
<input type="checkbox"onChange={(f)=>setCheck(f.target.checked)}/><span>Accept the Term & Condtion</span><br/><br/>
<Button type ="submit" >Submit</Button>



</form>

</div>
)
}
export default F1