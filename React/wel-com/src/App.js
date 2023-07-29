import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Button1 from './Button1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Prop1 from './Prop1';
import { useState } from "react"
import Prop2 from './Prop2';
import Prop3 from './Prop3';
import Toggle from './Toggle';
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3'


function App() {
  const [name,setName]=useState("NewName")
  function changeName()
  {
    setName("Thakur")
  }

  return (
    <div className="App">
      <header className="App-header">
        <Users />
      app page
      <Button1 />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Prop1 name ={name} email="a@gmail.com"other={{address:"Hasanpur", mobile:"101"}}/>
      <button onClick={changeName}>click me</button>
      <Prop2 name="Deepak" email="d@gmail.com" details={{social:"Facebook"}}/>
      <Prop2 name="Priti" email="p@email.com" details={{social:"Twitter"}}/>
      <Prop3 name ="Austin" Address="UK" More={{email:"au@gmail.com", mobile:"345"}}/>
      <Toggle />
      <Form />
      <Form2/>
      <Form3/>

      </header>
       
    </div>
  );
}

export default App;
