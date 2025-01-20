"use client";
import Navbar from './components/Navbar/Navbar';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from './components/Navbar/Hero/Hero';
import Banner from './components/Navbar/Banners/Banner';
import Services from './components/Navbar/Services/Services';
import WhyUs from './components/Navbar/Banners/WhyUs';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";





const page = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return  <div>
    <Navbar />
   <Hero />
   <Banner />
   <Services />
   <WhyUs />
   <Projects />
   <Contact />
   <Footer />
  </div>;
};

export default page;