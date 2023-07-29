
import{Link,NavLink} from 'react-router-dom'
export default function NavBar()
{

    return(
<div >
<ul className='nav1'>
<li ><NavLink to ="/about" >About</NavLink></li>   
       <li > <NavLink to ="/contact" >Contact</NavLink> </li> 
      <li >  <NavLink to ="/" >Home</NavLink> </li> 
      <li><NavLink to ="/filter">Filter</NavLink></li>
      
       
       </ul>
</div>
    )
}