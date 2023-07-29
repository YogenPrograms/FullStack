import {useParams} from 'react-router-dom'
export default function Name()
{
    const params=useParams()
    const {name}=params
    console.warn(name)
    return(

        <div>
<h2> This is  Name :{name}</h2>
        </div>
    )
    }