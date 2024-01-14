import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// import { BrowserRouter,Route } from "react-router-dom";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
function App() {

    return (
        <div>
            <Router>
                    {/* <Navbar/> */}
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>

                </Routes>
            </Router>
        </div>
    );
}



export default App;
