import { useState } from "react"

export default function F3()
{
   const [userName,setUser]=useState()
   const [userError1,setUserError]=useState()
   const[password, setPassword]=useState()
   const[passError,setPassError]=useState()
   function loginHandler(e)
   {
e.preventDefault();
if(userName==null || password==null)
{

    setUserError(true)
    setPassError(true)

}else{
    setUserError(false)
    setPassError(false)
}

   }
   function userHandler(e)
   {
    let uLen=e.target.value;
    if(uLen.length<3)
    {
   setUserError(true)
}else{
    setUserError(false)
}
  setUser(uLen) 
}
   function passwordHandle(e)
   {
let item=e.target.value
if(item.length<5)
{
   setPassError(true) 
}
else{
    setPassError(false)
}
setPassword(item)
   }

return(
<div>
    <h2>Validation Form</h2>
<input type="text" placeholder="Enter User Name" onChange={userHandler}></input>
{
    userError1?<span>User invalid</span>
:
null
}
<br/><br/>
<input type="text" placeholder="Enter Password"onChange={passwordHandle}></input>
{
    passError?
    <span>
        Check the password
    </span>
    :
    null
}
<br/><br/>
<button onClick={loginHandler}>Submit</button>


</div>

)
}