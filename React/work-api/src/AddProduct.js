import { useState } from "react"




export default function Addp()
{
    const [title, setTitle]=useState([])
    const[price,setPrice]=useState([])
    const[image, setImage]=useState([])
    const[dataPut, setDataPut]=useState([])
    const[message,setMessage]=useState("Data has been saved")
     function addPro()
    {
console.warn(title,price,image)
const formData= new FormData
formData.append('title',title)
formData.append('price',price)
formData.append('image',image)
let rData={title,price,image}

// const{title,price,image}=dataPut;

// await axios.post("https://fakestoreapi.com/products",dataPut)
let result= fetch("https://fakestoreapi.com/products"
,{
method:'POST',
headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
},
body:JSON.stringify(rData)
    
}).then((result)=>
{
    result.json().then((resp)=>
    {
        console.warn(resp)
    })
})
setMessage("Data Saved")


    }

    return(
        <div>
            <h2> Enter the details</h2>
            <h4>{message}</h4>
            <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)}/>
            <br/>
            <br/>
            <input type="text" className="form-control" onChange={(e)=>setPrice(e.target.value)}/>
            <br/>
            <br/>
            <input type="file" className="form-control"onChange={(e)=>setImage(e.target.files[0])}/>
            <br/>
            <br/>
            <button onClick={addPro}>Add</button>
        </div>
    )
}
