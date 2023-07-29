import logo from './logo.svg';
import './App.css';

import AboutUS from './comp/AboutUS'
import ContactUS from './comp/ContactUS'
import HomePage from './comp/HomePage'
import PolicyPage from './comp/PolicyPage'
import {BrowserRouter,Routes,Route,Link,Navigate} from 'react-router-dom'
import Nav from './Nav'
import Page404 from './comp/Page404'
import User1 from './comp/User1'
import User2 from './comp/User2'
import Filter from './Filter'

function App() {
  return (
    <div className="App">
      <header className="App-header">

       <BrowserRouter>
       <Nav/>
       
       <Routes>

    <Route path="/" element ={<HomePage/>} />
    <Route path="/about" element={<AboutUS/>}/>
    <Route path="/contact" element={<ContactUS/>}/>
    <Route  path="/policy" element={<PolicyPage />}/>
    <Route path="/filter" element={< Filter/>}/>
    <Route path="/user/:name"element={<User1 />}/>
    <Route path="/*" element={<Navigate to ="/"/>}/>
    
    
    </Routes>
    </BrowserRouter> 
    
      </header>
    </div>
  );
}

export default App;
