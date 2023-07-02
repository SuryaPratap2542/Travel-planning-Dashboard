import React from "react";
import './app.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

const App =()=>{
    return (
    <>
        <Navbar/>
        <Home/>
        <Main/>
        {/* <Footer/> */}
    </>
    )
}
export default App