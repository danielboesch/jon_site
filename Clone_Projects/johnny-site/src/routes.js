import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Home from "./components/Home"
import ErrorPage from './components/ErrorPage'


export default(
    <Router>
        <Routes>
            <Route path = '/' element={Home}/>
            <Route path = '/portfolio' element={Portfolio}/>
            <Route path = '/about' element={About}/>
            <Route path = '*' element={ErrorPage}/>
        </Routes>
    </Router>
)