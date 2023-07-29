import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Router, route, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUS from './component/AboutUS'
import Contact from './component/Contact'
import Home from './component/Home'
import Page from './component/Page'
import Nav from './component/Nav'
import Deepak from './component/Deepak'

function App() {
  return (
    <div className="App">
      <header className="App-header">
<BrowserRouter>
{/* <Nav /> */}
      <Routes>

<Route path="/home2" element={<Home />} />
<Route path="/deepak1" element={<Deepak />} />
<Route page="/about1" element={<AboutUS />}/>
<Route page="/contact1" element={<Contact />}/>
<Route Page="/page1" elment={<Page />}/>
      </Routes> 
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
