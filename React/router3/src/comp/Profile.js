import {useParams} from 'react-router-dom'


export default function ()
{
    const param=useParams()
    const{name}=param
return(

    <div>
        <h4> This is profile of name : {name}</h4>
    </div>
)

}