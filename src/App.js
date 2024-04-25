import React from "react";
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about"
function App(){
    return(<div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<><Home/></>} />
        <Route path="/About" element={<><About/></>} />
        </Routes>
        </BrowserRouter>
    </div>
       
    )
}
export default App











{/* <Route path="Home" element={<></>}/> */}