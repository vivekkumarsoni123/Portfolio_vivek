import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    title: 'Web Development Certification',
    issuer: 'Udemy',
    date: 'January 2023',
    description: 'Complete Web Development Bootcamp covering front-end and back-end technologies.',
    link: 'https://udemy.com/certificate/...'
  },
  // Add more certificates here
];

const Certificates = () => {
  useEffect(() => {
    gsap.from('.certificate-card', {
      scrollTrigger: {
        trigger: '.certificates-container',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section id="certificates" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Certificates</h2>
        <div className="certificates-container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="certificate-card bg-gray-800 rounded-lg p-6 shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <FaAward className="text-blue-400 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              </div>
              <div className="text-gray-400 mb-4">
                <p className="font-medium">{cert.issuer}</p>
                <p className="text-sm">{cert.date}</p>
              </div>
              <p className="text-gray-300 mb-6">{cert.description}</p>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Certificate
                <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
