import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Home from "./components/Home"
import ErrorPage from './components/ErrorPage'
import Contact from './components/Contact'
import Sports from './components/Sports'
import LiveMusic from './components/LiveMusic'
import Portraits from './components/Portraits'


export default(
    <Router>
        <Routes>
            <Route path = '/' element={Home}/>
            <Route path = '/portfolio' element={Portfolio}>
                <Route path = 'sports' element={Sports}/>
                <Route path = 'live-music' element={LiveMusic}/>
                <Route path = '/portraits' element={Portraits}/>
            </Route>
            <Route path = '/about' element={About}/>
            <Route path = '/contact' element={Contact}/>
            <Route path = '*' element={ErrorPage}/>
        </Routes>
    </Router>
)