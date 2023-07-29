import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './comp/About'
import Contact from './comp/Contact'
import Home from './comp/Home'
import User from './comp/User'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import NavBar from './NavBar';
import Name from './Name'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <NavBar/>
        <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about'element={< About/>}/>
<Route path='/contact' element={< Contact/>}/>
<Route path='/user' element={<User />}/>
<Route path='/name/:name'element={< Name/>}/>
        </Routes>
        </BrowserRouter>
       
       

      </header>
    </div>
  );
}

export default App;
