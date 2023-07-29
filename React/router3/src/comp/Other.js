import { Link, Outlet } from "react-router-dom"
export default function Other()
{
    return(
<div>

<h2>
    This is Other page
</h2>
<Link to ='other1'>Other1</Link>
<Link to ='other2'>Other2</Link>
<Outlet/>


</div>


    )


}