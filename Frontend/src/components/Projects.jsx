import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "User NoteBook",
    description:
      "Developed an E-Notebook App for secure note storage, enabling user-specific access, authenticated via unique IDs,used Bcrypt for password",
    images: ["Login.png", "SignUp.png", "Edit_Delete.png","User_Notes.png","MongoDB.png"],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Bootstrap", "AWS", "Docker"],
    githubLink: "https://github.com/vivekkumarsoni123/inotebook/tree/main",
    liveLink: "https://github.com/vivekkumarsoni123/inotebook/tree/main",
    autoplayDelay: 2500, 
  },
  
  {
    title: "Anomaly Detection",
    description:
      "An ML model to determine anomaly in crowd using smartphone sensor dataset. Pre-processed the dataset and applied Decision Tree algorithm.",
    images: ["Anomaly_1.jpg","Anomaly_2.jpg","Anomaly_3.jpg","Anomaly_4.jpg"],
    technologies: [
      "Python","Jupyter Notebook","Decision Tree Algorithm","Python Libraries"

    ],
    githubLink: "https://github.com/vivekkumarsoni123/Infosys_Springboard_Project",
    liveLink: "https://github.com/vivekkumarsoni123/Infosys_Springboard_Project",
    autoplayDelay: 1500, 
  },
  {
    title: "Netflix Clone",
    description:
      "A clone of the popular streaming platform Netflix. It has a user-friendly interface and is using online API to fetch the movie details.",
    images: ["Nflix_Home.png","Nflix_cards (1).png","Nflix_cards (2).png"],
    technologies: ["React","Online API","HTML","CSS"],
    githubLink: "https://github.com/vivekkumarsoni123/NetFlix-Clone",
    liveLink: "https://github.com/vivekkumarsoni123/NetFlix-Clone",
    autoplayDelay: 1000, 
  },
  {
    title: "NetFlix Recommendation System",
    description:
      "An ML model to recommend the top 10 movies based on the genre of a movie title. Further can be used in development by making the api to give real world experience.",
    images: ["Netflixrecom_1.jpg","Netflixrecom_2.jpg","Netflixrecom_3.jpg",],
    technologies: [
      "Python","Jupyter Notebook","TfidfVectorizer","cosine_similarity"

    ],
    githubLink: "https://github.com/vivekkumarsoni123/NetFlix-Recommendation-System",
    liveLink: "https://github.com/vivekkumarsoni123/Infosys_Springboard_Project",
    autoplayDelay: 1500, 
  },
  {
    title: "Load Balancing and Autoscaling",
    description:
      "Implemented the real time concept of load balancing and autoscaling on AWS and GCP platforms. Created multiple servers and hosted websites to see the traffic request direction. At high trffic automatically added new server and at low traffic removed the server.",
    images: ["LB_1.jpg","LB_2.jpg","LB_3.jpg","LB_4.jpg"],
    technologies: [
      "AWS","GCP","Mobaxterm","Linux","Security Ports","Load Balancing","Autoscaling"

    ],
    githubLink: "https://github.com/vivekkumarsoni123/NetFlix-Recommendation-System",
    liveLink: "https://github.com/vivekkumarsoni123/Infosys_Springboard_Project",
    autoplayDelay: 1500, 
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each card
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen  py-20 px-4 sm:px-6"
    >
      <div className="about container mx-auto ">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-blue-400/10 bg-opacity-70 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="relative group aspect-video">
                <div className="relative w-full h-full group">
                  <div className="w-full h-full">
                    <Swiper
                      autoplay={{
                        delay: project.autoplayDelay, 
                        disableOnInteraction: false
                      }}
                      speed={4000} 
                      loop={true} 
                      slidesPerView={1} 
                      freeMode={true} 
                      modules={[Pagination, Autoplay]}
                      className="w-full h-full"
                    >
                      {project.images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className="absolute inset-0 bg-[#5C0041]/50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                    <div className="flex space-x-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transform hover:scale-110 transition-transform"
                      >
                        <FaGithub className="w-10 h-10" />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transform hover:scale-110 transition-transform"
                      >
                        <FaExternalLinkAlt className="w-10 h-10" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
