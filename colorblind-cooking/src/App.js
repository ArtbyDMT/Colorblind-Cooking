import './App.css';
import SignUp from './components/pages/SignUp';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import{ Routes, BrowserRouter, Route  }from 'react-router-dom';
import SteakOrBurger from './components/pages/SteakOrBurger';
import Steak from './components/pages/Steak';
import Burger from './components/pages/Burger';
import TimersPage from './components/pages/TimersPage';
import Finished from './components/pages/Finished';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <br/ >
      <Routes>     
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/steakorburger" element={<SteakOrBurger />} />
          <Route path="/steak" element={<Steak />} /> 
          <Route path="/burger" element={<Burger />} /> 
          <Route path="/timerspage" element={<TimersPage />} /> 
          <Route path="/finished" element={<Finished />} /> 
      </Routes>
      <br />
      </BrowserRouter>
    </div>
  );
}


