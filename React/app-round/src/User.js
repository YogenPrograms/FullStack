
import React from 'react'
import {Button} from 'react-bootstrap'
class User extends React.Component
{
    constructor()
    {
super()
this.state={

    email:"a@gmail.com"
}
    }
render()
{
return(
<div>
<h2> This is class method : {this.props.data}</h2>
<h4> This is Email :{this.state.email}</h4>
<Button onClick={()=>this.setState({email:"yog@gmail.com"})}>Email change</Button>

</div>
)
}
}
export default User;