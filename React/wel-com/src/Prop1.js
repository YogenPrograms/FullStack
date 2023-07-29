


function Pro1(props)
{

    
    return( 
<div style={{backgroundColor:"skyblue", margin:10}}>
<h2>Hello : {props.name}</h2>
<h4>Email : {props.email}</h4>
<h5>address :{props.other.address}</h5>
<h5>Mobile: {props.other.mobile}</h5>

</div>
    )
}
export default Pro1