import { Routes, Route } from 'react-router-dom'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './App.css'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Footer from './pages/Footer'


export default function App() {
    return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

