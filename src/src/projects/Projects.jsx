import Exp_3D_model from "../experience/Exp_3D_model";
import Horizonlal_nav from "../Home/components/Horizonlal_nav";
import CardPro from "../mobile/components/Card_pro";
import { Link } from "react-router-dom";
import '../Home/components/Nav.css';


export default function Projects() {

  const cards = [
    {
      image: "/x_pro.png",
      category: "Xi",
      heading: "AI-Powered Twitter Automation Agent",
      author: "Arnav",
      daysAgo: "60",
    },
    {
      image: "/co_pro.png",
      category: "CO₂",
      heading: "Full-Stack DSA Coding Platform with AI chatbot",
      author: "Arnav",
      daysAgo: "180",
    },
    {
      image: "/ransum_pro.png",
      category: "Ransum",
      heading: "Crypto Wallet Chrome Extension",
      author: "Arnav",
      daysAgo: "90",
    },
    
  ];

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
            {/* 3D background */}
            <div className="absolute inset-0 z-0">
              <Exp_3D_model />
            </div>
      
            {/* UI layer */}
            <div className="relative z-10 flex flex-col h-full text-white pointer-events-none">
              <div className="pointer-events-auto ml-4">
                <nav className="flex items-center gap-6 py-6 text-[#B30C04] text-[clamp(0.75rem,1.5vw,1rem)] orbitron-400 ">


                <Link to="/" className="transition-transform duration-200 hover:scale-110 hover:text-[#ff2a1a]">
                    <button className="nav_bar">Home</button>
                </Link>
                <Link to="/about" className="transition-transform duration-200 hover:scale-110 hover:text-[#ff2a1a]">
                    <button className="nav_bar">About</button>
                </Link>
                <Link to="/experience" className="transition-transform duration-200 hover:scale-110 hover:text-[#ff2a1a]">
                    <button className="nav_bar">Experience</button>
                </Link>
                <Link to="/connect" className="transition-transform duration-200 hover:scale-110 hover:text-[#ff2a1a]">
                    <button className="nav_bar">Connect</button>
                </Link>
                
            </nav>
              </div>
              <div className="pointer-events-auto orbitron-400">
                      
                        <h2 className="text-3xl font-bold text-red-400 mb-8 text-center">
                          Projects
                        </h2>
                      <div className="w-full flex justify-center">
                        <div className="grid grid-cols-2  gap-y-6 justify-items-center w-[40vw]">
                          {cards.map((card, index) => (
                            <CardPro
                              key={index}
                              image={card.image}
                              category={card.category}
                              heading={card.heading}
                              author={card.author}
                              daysAgo={card.daysAgo}
                            />
                          ))}
                        </div>
                      </div>
                     
              </div>
            </div>
          </div>
    </>
  );
}
