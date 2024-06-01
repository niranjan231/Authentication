import logo from './logo.svg';
import './App.css';
import Admin from './Pages/Admin';
import Costumer from './Pages/Costumer';
import Auth from './Pages/Auth';
import Engineer from './Pages/Engineer';
import {BrowserRouter,Routes,Route} from "react-router-dom";


import Links from './Home/Links';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route classNmae="App">
      <Route path='/' element={<Auth/>} ></Route>
      <Route path='/Admin' element={<Admin/>} ></Route>
      <Route path='/Costumer' element={<Costumer/>} ></Route>
      <Route path='/Engineer' element={<Engineer/>} ></Route>
    </Route>
    </Routes>
    </BrowserRouter>




  )
}

export default App;
