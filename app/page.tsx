"use client";

import "@/public/css/main.css";
import "@/public/css/noscript.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
import Banner from "./components/Banner";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";



export default function Home() {
  return (
    <>
            <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
            background: '#171717',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      <div className="is-preload landing" id="page-wrapper">
    
        <Banner />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      
      </div>
    </>
  );
}
