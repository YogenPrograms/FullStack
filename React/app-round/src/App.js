import logo from './logo.svg';
import './App.css';
import User from './User'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import Mount from './Mount'
import Effect1 from './Effect1'
import Map1 from './Map1'
import Table1 from './Table1';


function App() {
  const [name,setName]=useState("Deepak")
  const Tab=[
    {name:"yogen" ,age:52, mobile:"9658", other:[{address1:"delhi",address2:"pune"}]},
    {name:"Ruhi" ,age:5, mobile:"1234",other:[{address1:"delhi",address2:"pune"}]},
    {name:"Apeksha" ,age:10, mobile:"56789",other:[{address1:"delhi",address2:"pune"}]}
    
  ]
  return (
    <div className="App">
      <header className="App-header">
        <User data={name}/>
        <Button onClick={()=>setName("Yogen")}> Change</Button>
        <Mount />
        <Effect1 />
        <Map1 />
        <Table1 data={Tab} />
      </header>
    </div>
  );
}

export default App;
