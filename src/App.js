import logo from './logo.svg';
import './App.css';
import Addcourse from './components/Addcourse';
import Search from './components/Search';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
        <Route path="/add" element={<Addcourse/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/view" element={<View/>} />

    </Routes>
    </BrowserRouter>
  );
}


export default App;
