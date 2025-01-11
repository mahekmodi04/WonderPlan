import React, { useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';  // Navbar for Home Page
import Header from '../../Components/Header/Header';
import About from '../../Components/About/About';
import FAQ from '../../Components/FAQ/FAQ';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';  // Already globally imported in App.jsx

const Home = () => {
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const handleScrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar 
        handleScrollToHome={handleScrollToHome} 
        handleScrollToAbout={handleScrollToAbout} 
        handleScrollToFAQ={handleScrollToFAQ}
        handleScrollToContact={handleScrollToContact}
      />
      <Header />
      <div ref={homeRef}>
        <About ref={aboutRef} />
        <FAQ ref={faqRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  );
};

export default Home;
