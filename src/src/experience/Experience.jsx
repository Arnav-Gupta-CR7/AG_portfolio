import Exp_3D_model from "./Exp_3D_model";
import { Link } from "react-router-dom";
import '../Home/components/Nav.css';

export default function Experience() {
  return (
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
                <Link to="/projects" className="transition-transform duration-200 hover:scale-110 hover:text-[#ff2a1a]">
                    <button className="nav_bar">Projects</button>
                </Link>
                <Link to="/connect" className="transition-transform duration-200 hover:scale-110 hover:text-[#ff2a1a]">
                    <button className="nav_bar">Connect</button>
                </Link>
                
            </nav>
        </div>

        <div className="pointer-events-auto">
          <div
            className="fixed top-1/2 left-1/2 
              w-[550px] h-[650px] 
              -translate-x-1/2 -translate-y-1/2
              bg-white/20 backdrop-blur-md text-white
              rounded-2xl shadow-2xl overflow-y-auto p-8"
          >
            <h1 className="text-3xl font-bold mb-4">Experience</h1>

            <div className="mb-6">
              <h2 className="text-xl font-semibold">
                Full Stack Developer Intern — dWise Healthcare IT Solutions Pvt. Ltd.
              </h2>
              <p className="text-sm opacity-80 mb-3">September 2025 – November 2025</p>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  Developed and optimized the Scheduler module using Angular (frontend) 
                  and Spring Boot (backend), improving overall system efficiency by ~20%.
                </li>
                <li>
                  Implemented a time-blocking mechanism using a single recurrence-rule 
                  string instead of individual date entries, reducing database records 
                  by over 70%.
                </li>
                <li>
                  Built and integrated RESTful APIs in Spring Boot to support real-time 
                  scheduling, improving response times and maintainability.
                </li>
                <li>
                  Engineered a “Find Nearest Slot” feature that automatically locates 
                  available appointment times, cutting user search time by ~40%.
                </li>
                <li>
                  Collaborated with cross-functional teams to test, debug, and deploy 
                  new scheduling features into production.
                </li>
              </ul>
               
            </div>
            <a
                href="https://docs.google.com/document/d/1pUkJ9lnxXjzgd5GaNcWfFAn-8Z5hz6q_dFIbMeY2OqE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition pointer-events-auto"
              >
              Resume
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
