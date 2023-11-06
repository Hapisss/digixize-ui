import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Support from './pages/Support'
import Navbar from './components/Navbar';

export default function App() {

    return (
        <Router>
            <div className='flex flex-col gap-[132px]'>
                <Navbar />
                <div className='w-full h-full'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/support" element={<Support />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
