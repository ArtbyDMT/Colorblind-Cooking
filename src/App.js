import './App.css';
import SignUp from './components/pages/SignUp';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import Info from './components/pages/Info';
import{ Routes, BrowserRouter, Route  }from 'react-router-dom';
import SteakOrBurger from './components/pages/SteakOrBurger';
import Steak from './components/pages/Steak';
import Burger from './components/pages/Burger';
import Finished from './components/pages/Finished';
import FireTimer from './components/firetimer/FireTimer';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <br />
      <Routes>     
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/info" element={<Info />} />
          <Route path="/steakorburger" element={<SteakOrBurger />} />
          <Route path="/steak" element={<Steak />} /> 
          <Route path="/burger" element={<Burger />} /> 
          <Route path="/timerspage" element={<FireTimer />} /> 
          <Route path="/finished" element={<Finished />} /> 
      </Routes>
      <br />
      </BrowserRouter>
    </div>
  );
}


