import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode, SiHackerrank } from "react-icons/si";
const Home = () => {
  const containerRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current.children;
      
      if (tl.current) {
        tl.current.kill();
      }

      tl.current = gsap.timeline()
        .set(elements, { 
          opacity: 0,
          y: 50
        })
        .to(elements, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      <div ref={containerRef} className="text-center w-full max-w-4xl mx-auto pt-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 break-words">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Vivek Kumar Soni
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8"> 
          Full Stack Developer | Cloud and Devops Engineer
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 flex align-items-center justify-center gap-5">
      <a href="https://github.com/vivekkumarsoni123" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-4xl hover:text-white transition duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/vivek-kumar-soni-9b2591258/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-4xl hover:text-blue-500 transition duration-300" />
      </a>
      <a href="https://www.hackerrank.com/profile/str_vivekkumars1" target="_blank" rel="noopener noreferrer">
        <SiHackerrank className="text-4xl hover:text-blue-400 transition duration-300" />
      </a>
      <a href="https://www.geeksforgeeks.org/user/strvivekkumdy2x/" target="_blank" rel="noopener noreferrer">
    <SiGeeksforgeeks className="text-3xl hover:text-green-500 transition duration-300" />
  </a>
  <a href="https://leetcode.com/u/VIVEK_SONI-123/" target="_blank" rel="noopener noreferrer">
    <SiLeetcode className="text-3xl hover:text-yellow-500 transition duration-300" />
  </a>
      
    </p>
        <div>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
