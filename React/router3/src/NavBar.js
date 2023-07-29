
import {Link,NavLink} from 'react-router-dom'
export default function()
{
return(
<div>

<NavLink to ='/about' className='link'>About</NavLink>
        <NavLink to ='/'className='link'>User</NavLink>
        <NavLink to ='/contact'className='link'>Contact</NavLink>
        <NavLink to ='/profile/Yogen'className='link'>Yogen</NavLink>
        <NavLink to ='/profile/Thakur'className='link'>Thakur</NavLink>
        <NavLink to ='/other'>Other</NavLink>



</div>

)

}