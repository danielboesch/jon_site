import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Portfolio from "./Portfolio";
import About from "./About";
import Home from "./Home";
import ErrorPage from './ErrorPage'
import Contact from './Contact'
import Portraits from "./Portraits";
import LiveMusic from "./LiveMusic";
import Sports  from "./Sports";
import App from "../App"

function Header() {
    function refreshPage() {

        setTimeout(() => {
            window.location.reload(false);
          }, 1);
      }
    return(
        <div> 
<Router>
            <header className="header">
            <div className='fullLogo'>
        <Link to = '/' className="links">
            <img src="/./imgs/jonLogoSpin.png" alt="jon-Logo-White"  className='mainLogo2' onClick={refreshPage}></img>
        </Link>
        <Link to = '/' className="links">
            <img src="/./imgs/jonLogoWordsFin.png" alt="jon-Logo-White2" className='mainLogo' onClick={refreshPage}></img>
        </Link>
        {/* <Link to = '/' className="links">
            <img src="./imgs/jonLogoWhite.png" alt="jon-Logo-White"  className='mainLogo2'></img>
        </Link>
        <Link to = '/' className="links">
            <img src="./imgs/jonLogoWords2.png" alt="jon-Logo-White"  className='mainLogo3'></img>
        </Link> */}

        </div>

        <div className='headerLinks'>
            <ul>

                <div className="portfolioLinkAndBox">
                    <li><Link to = '/portfolio' className="linksPortfolio" onClick={refreshPage}><b>PORTFOLIOS</b></Link>
                    <div className="invisContainer"></div>
                        <div className="portfoliosBox">
                            <ul className="portfoliosBoxUl">
                                <Link to = '/portfolio' className="portLinksHeader" onClick={refreshPage}><li className="">ALL</li></Link>
                                <Link to = '/portfolio/sports' className="portLinksHeader" onClick={refreshPage}><li className="">SPORTS</li></Link>
                                <Link to = '/portfolio/live-music' className="portLinksHeader" onClick={refreshPage}><li className="">LIVE MUSIC</li></Link>
                                <Link to = '/portfolio/portraits' className="portLinksHeader" onClick={refreshPage}><li className="">PORTRAITS</li></Link>
                            </ul>
                        </div>
                    </li>
                </div>


                <li><Link to = '/about' className="links" onClick={refreshPage}><b>ABOUT</b></Link></li>
                <Link to = '/contact' className="links" onClick={refreshPage}>
                    <div className='getInTouch'><b>GET IN TOUCH</b></div>
                </Link>
            </ul>
        </div>
            </header>
                <Routes>
                    {/* <Route path = "/" element = {<App />}/> */}
                    <Route path = "/portfolio/" element = {<Portfolio />}/>
                    <Route path = "/" element = {<Home />}/>
                    <Route path = "/about" element = {<About />}/>
                    <Route path = '/contact' element={<Contact />}/>
                    <Route path = "*" element={<ErrorPage />}/>
                    {/* <Route path = "/portfolio/:portfolioType" element = {<Portfolio />}/> */}
                    <Route path = "/portfolio/sports" element = {<Sports />}/>
                    <Route path = "/portfolio/live-music" element = {<LiveMusic />}/>
                    <Route path = "/portfolio/portraits" element = {<Portraits />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Header;