import Home from './pages/home/Home';
import './styles/global.scss';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MainLayout from './layout/MainLayout';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path='/' element={<Home/>} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
