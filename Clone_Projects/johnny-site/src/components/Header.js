import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Portfolio from "./Portfolio";
import About from "./About";
import Home from "./Home";
import ErrorPage from './ErrorPage'
import App from "../App"

function Header() {
    return(
        <div> 
<Router>
            <header className="header">
            <div className='fullLogo'>
        <img src="./imgs/jonLogoWhite2.png" alt="jon-Logo-White2" className='mainLogo'></img>
        <img src="./imgs/jonLogoWhite.png" alt="jon-Logo-White"  className='mainLogo2'></img>
        <img src="./imgs/jonLogoWords2.png" alt="jon-Logo-White"  className='mainLogo3'></img>
        </div>

        <div className='headerLinks'>
            <ul>
                <li><Link to = '/' className="links">HOME</Link></li>
                <li><Link to = '/portfolio' className="links">PORTFOLIO</Link></li>
                <li><Link to = '/about' className="links">ABOUT</Link></li>
                <li>COLLECTIONS</li>
                <div className='getInTouch'>GET IN TOUCH</div>
            </ul>
        </div>
            </header>
                <Routes>
                    {/* <Route path = "/" element = {<App />}/> */}
                    <Route path = "/portfolio" element = {<Portfolio />}/>
                    <Route path = "/" element = {<Home />}/>
                    <Route path = "/about" element = {<About />}/>
                    <Route path = "*" element={<ErrorPage />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Header;