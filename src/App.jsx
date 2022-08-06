import Home from "./pages/home/Homepage";
import Journey from "./pages/journey/Journeys";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

export default  function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="" element={<Home/> } />
                    <Route exact path="/journey" element={ <Journey/>} />
                    <Route exact path="/gallery" element={ <Gallery/>} />
                    <Route exact path="/about" element={<About/>} />
                </Routes>
            </Router>
        </>
    )
}