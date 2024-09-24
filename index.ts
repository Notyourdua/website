import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page of a multi-page React website.</p>
    </div>
  );
}

export default Home;


import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Learn more about our website on this page.</p>
    </div>
  );
}

export default About;


import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Get in touch with us using this contact form.</p>
    </div>
  );
}

export default Contact;

   
   
   
   
   import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
