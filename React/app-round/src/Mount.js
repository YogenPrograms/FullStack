

import react from 'react'
import { Button } from 'react-bootstrap';
let status=false
class Mount extends react.Component
{
    
    constructor()
    {
super();

this.state={
    name:"yogen",
    email:"abc@gmail.com"
}

    }
    componentDidMount()
    {
        console.warn("Did Mount")
    }
    componentDidUpdate()
    {
        console.warn("updateMount")
       status=true

    }
 shouldComponentUpdate()
 {
   if(status==true)
   {
    return false
   }
   return true
}
    render()
    {
        console.warn("render")
    return(

<div>

<h2> update Name :{this.state.name}</h2>
<h4> update Email :{this.state.email}</h4>
<Button onClick={()=>this.setState({name:"Deepak",email:"d@gmail.com"})}>update details</Button>
</div>

    )
    }
}
export default Mount