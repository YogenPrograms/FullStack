import {Link,NavLink} from 'react-router-dom'
export default function Nav()
{

    return(

        <div >
            <ul className='link1'>
<li><NavLink to ="/">Home</NavLink></li>
<li><NavLink to ="/about">About</NavLink></li>
<li> <NavLink to="/user">User</NavLink></li>
<li>  <NavLink to ="contact">Contact</NavLink></li>
<li><NavLink to ="name/yogen">Yogen</NavLink></li>
<li><NavLink to ="name/thakur">Thakur</NavLink></li>

        </ul>
        </div>
    )
}