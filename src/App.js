import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Sign from './components/Sign';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Sign' element={<Sign/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
