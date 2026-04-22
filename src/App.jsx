import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Trustedlogo from './Components/Trustedlogo';
import SOCSection from './Components/SOCSection';
import Morpheus from './Components/Morpheus';
import Antonomoussec from './Components/Antonomoussec';
import CustomerStories from './Components/CustomerStories';
import Threatsection from './Components/Threatsection';
import FAQsection from './Components/FAQsection';
import Footer from './Components/Footer';
import Pricing from './Pages/PricingPage'; 
import DemoPage from './Pages/DemoPage';
import AboutPage from "./Pages/AboutPage";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Only render the components like Banner, Hero, etc. for the Home page */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Banner />
                <Hero />
                <Trustedlogo />
                <SOCSection />
                <Morpheus />
                <Antonomoussec />
                <CustomerStories />
                <Threatsection />
                <FAQsection />
                <Footer />
              </div>
            }
          />
          {/* Only render the Pricing component for /pricing route */}
          <Route path="/pricing" element={<Pricing />} />
           <Route path="/demo" element={<DemoPage />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/careers" element={<Careers />} />
           <Route path="/contact" element={<Contact />} /> {/* Assuming you have a Contact component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;