import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Trustedlogo from "./Components/Trustedlogo";
import SOCSection from "./Components/SOCSection";
import Morpheus from "./Components/Morpheus";
import Antonomoussec from "./Components/Antonomoussec";
import CustomerStories from "./Components/CustomerStories";
import Threatsection from "./Components/Threatsection";
import FAQsection from "./Components/FAQsection";
import Footer from "./Components/Footer";

import Pricing from "./Pages/PricingPage";
import DemoPage from "./Pages/DemoPage";
import AboutPage from "./Pages/AboutPage";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";

import Chatbot from "./Components/Chatbot";

/* 👇 Layout Wrapper (IMPORTANT) */
function Layout() {
  const location = useLocation();

  // hide navbar only on register page
  const hideNavbar = location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <div>
               <Chatbot />
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

        {/* PAGES */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

/* MAIN APP */
const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;