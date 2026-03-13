import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
const App = () => {
  return (
    <main className="bg-slate-300/20">
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
        path='/*'
        element={
          <>
          <Routes>
               <Route path="/projects" element={<Projects />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/about" element={<About />} />
          </Routes>
          <Footer/>
          </>
        }
        />
      </Routes>
    </BrowserRouter>
    </main>
  );
};

export default App;


/*export default function App() {
  return <h1 style={{ color: "red" }}>APP IS WORKING</h1>;
}*/