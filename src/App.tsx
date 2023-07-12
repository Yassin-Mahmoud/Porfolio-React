import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Suspense } from "react";

function App() {
    return (
        // <>
        //     <Router>
        //         <Navbar />
        //         <Routes>
        //             <Route path="/" element={<Home />} />
        //             <Route path="/projects" element={<Projects />} />
        //             <Route path="/about" element={<About />} />
        //             <Route path="/contact" element={<Contact />} />
        //         </Routes>
        //         <Footer />
        //     </Router>
        // </>

        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
            <Router>
                <Navbar />
                <Suspense fallback={""}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
