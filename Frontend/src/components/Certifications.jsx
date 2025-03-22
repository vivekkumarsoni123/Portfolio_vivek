import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  
  {
    title: "Red Hat Certified System Administrator",
    issuer: "Red Hat Academy",
    date: "Jul 25, 2024",
    credentialLink: "https://rhtapps.redhat.com/verify?certId=240-110-015",
    skills: ["Linux, Red Hat Enterprise Linux, RHCSA, System Administrator"],
    badgeUrl: "https://www.credly.com/badges/09f23c1f-2588-4d10-bec8-7c9f61ee2c28/public_url"
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco",
    date: "April 30, 2023",
    credentialLink: "https://www.credly.com/badges/0ab5a1e2-d727-4ab7-9319-7b90c0c05fdc/public_url",
    skills: ["Data Analysis,Data Collection,Data Validation"],
    badgeUrl: "https://www.credly.com/badges/0ab5a1e2-d727-4ab7-9319-7b90c0c05fdc/public_url"
  },
  {
    title: "Networking Academy Learn-A-Thon 2023",
    issuer: "Cisco",
    date: "May 05, 2023",
    credentialLink: "https://www.credly.com/badges/e708cba5-5784-4ded-9104-ed939a1cfa25/public_url",
    skills: ["Networking, Cisco Packet Tracer Tool"],
    badgeUrl: "https://www.credly.com/badges/e708cba5-5784-4ded-9104-ed939a1cfa25/public_url"
  },
  {
    title: "HackerRank 5* Certificates",
    issuer: "HackerRank",
    date: "2023",
    credentialLink: "https://www.hackerrank.com/profile/str_vivekkumars1",
    skills: ["Poblem Solving,Java,Python,C,CPP"],
    badgeUrl: "https://www.hackerrank.com/profile/str_vivekkumars1"
  },
  {
    title: "AWS Knowledge: Cloud Essentials",
    issuer: " Amazon Web Services Training and Certification",
    date: " January 11, 2024",
    credentialLink: "https://www.credly.com/badges/4249fa35-8911-4c2a-84be-975e0a9660be/public_url",
    skills: ["Amazon Web Services (AWS),AWS,AWS Cloud,AWS Compute,AWS Databases,AWS Networking,AWS Security,AWS storage"],
    badgeUrl: "https://www.credly.com/badges/4249fa35-8911-4c2a-84be-975e0a9660be/public_url"
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services Training and Certification",
    date: "August 07, 2024",
    credentialLink: "https://www.credly.com/badges/318974c7-7d15-4438-9879-76d531a436de/public_url",
    skills: ["AWS Architecture,AWS Cloud,AWS Core Services,AWS Pricing,AWS Support"],
    badgeUrl: "https://www.credly.com/badges/318974c7-7d15-4438-9879-76d531a436de/public_url"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "April 29, 2023",
    credentialLink: "https://www.credly.com/badges/47143dbf-b729-4466-81ac-eb162e300137/public_url",
    skills: ["Cyber Best Practices,Cybersecurity,Network Vulnerabilities,Privacy And Data Confidentiality,Threat Detection"],
    badgeUrl: "https://www.credly.com/badges/47143dbf-b729-4466-81ac-eb162e300137/public_url"
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "July 30, 2024",
    credentialLink: "https://www.credly.com/badges/ca878705-fbc9-46a0-a7af-749ad4172e53/public_url",
    skills: ["Ethernet, IP connectivity, IP services, IP Subnetting, IPv4 And IPv6 Addressing, Network Fundamentals, Security Fundamentals,Switching"],
    badgeUrl: "https://www.credly.com/badges/ca878705-fbc9-46a0-a7af-749ad4172e53/public_url"
  },
  {
    title: "IT Specialist - HTML and CSS",
    issuer: "Pearson",
    date: "May 06, 2023",
    credentialLink: "https://www.credly.com/badges/3535d277-89f2-4bbc-a0a2-0ad6fdccfc60/public_url",
    skills: ["CSS, HTML, HTML5"],
    badgeUrl: "https://www.credly.com/badges/3535d277-89f2-4bbc-a0a2-0ad6fdccfc60/public_url"
  },
  {
    title: "Implement Load Balancing on Compute Engine Skill Badge",
    issuer: "Google Cloud",
    date: "August 28, 2024",
    credentialLink: "https://www.credly.com/badges/cccc5aeb-4e19-4a3f-af6a-70698ef8e016/public_url",
    skills: ["Cloud Computing,Compute Engine,GKE,Kubernetes,Networking"],
    badgeUrl: "https://www.credly.com/badges/cccc5aeb-4e19-4a3f-af6a-70698ef8e016/public_url"
  }
  // Add more certifications as needed
];

const Certifications = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="min-h-screen  py-20">
      <div className="container about mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-blue-400/10 bg-opacity-50 rounded-lg p-6 shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-400 flex items-center">
                    <FaAward className="mr-2" />
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-gray-400 mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{cert.date}</span>
              </div>

              <div className="mb-6">
                <h4 className="text-gray-300 font-medium mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={cert.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Certificate
                <FaExternalLinkAlt className="ml-2 text-sm" />
              </a>
            </div>
          ))}
              {/* <div className="absolute top-40 left-[20%] h-1/2 w-1/2">
                <img src="22MH1A05H7.png" className="h-full w-full" alt="" />
              </div> */}
        </div>
        
      </div>
    </section>
  );
};

export default Certifications;
