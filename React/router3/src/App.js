import logo from './logo.svg';
import './App.css';
import About from './comp/About'
import Contact from './comp/Contact'
import User from './comp/User'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import NavBar from './NavBar';
import Profile from './comp/Profile';
import Other from './comp/Other';
import Other1 from './comp/Other1';
import Other2 from './comp/Other2';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/'element={<User/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path='/profile/:name'element={<Profile/>}/>
          <Route path='/other/'element={< Other/>}/>
            <Route path='other2'element={<Other2/>}/>
            <Route path='other1'element={< Other1 />}/>
          
        </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
