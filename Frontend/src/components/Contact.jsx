import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const contactCardsRef = useRef([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      contactCardsRef.current.forEach((card, index) => {
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
          delay: index * 0.2,
          ease: "power3.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://portfolio-vivek.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope className="text-2xl" />, text: "str.vivekkumarsoni123@gmail.com", href: "mailto:your.email@example.com" },
    { icon: <FaPhone className="text-2xl" />, text: "7091757313", href: "tel:+1234567890" },
    { icon: <FaLinkedin className="text-2xl" />, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/vivek-kumar-soni-9b2591258/" },
    { icon: <FaGithub className="text-2xl" />, text: "GitHub Profile", href: "https://github.com/vivekkumarsoni123" }
  ];

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen  py-12 sm:py-20">
      <div className="container about mx-auto px-3 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-16">Get In Touch</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {/* Contact Info Card */}
            <div 
              ref={el => contactCardsRef.current[0] = el}
              className="bg-blue-400/10 bg-opacity-50 rounded-lg p-4 sm:p-8 shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-8">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <span className="text-blue-400 mr-3 sm:mr-4 group-hover:text-white transition-colors">
                      {info.icon}
                    </span>
                    <span className="text-base sm:text-lg">{info.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form Card */}
            <div 
              ref={el => contactCardsRef.current[1] = el}
              className="bg-blue-400/10 bg-opacity-50 rounded-lg p-4 sm:p-8 shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-8">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {status.message && (
                  <div className={`p-2 sm:p-3 rounded-md text-sm sm:text-base ${
                    status.type === 'success' ? 'bg-blue-400/10 bg-opacity-50 text-green-500 ' : 'bg-blue-400/10 bg-opacity-50 text-red-700'
                  }`}>
                    {status.message}
                  </div>
                )}
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-1 sm:mb-2 text-base sm:text-lg">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-blue-400/10  border border-gray-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:border-blue-500 transition-colors text-base sm:text-lg"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-1 sm:mb-2 text-base sm:text-lg">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-blue-400/10  border border-gray-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:border-blue-500 transition-colors text-base sm:text-lg"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-1 sm:mb-2 text-base sm:text-lg">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-blue-400/10  border border-gray-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none text-base sm:text-lg"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-blue-400/10 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-blue-400/20 transition-colors disabled:bg-blue-400/40 text-base sm:text-lg"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
