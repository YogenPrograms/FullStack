
import { useParams } from "react-router-dom"
export default function User1()
{
    const param=useParams()
    const {name}=param
    return(

<h2> This is {name}</h2>

    )
}