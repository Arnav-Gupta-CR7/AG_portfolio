import { Link } from "react-router-dom";
import './Nav.css';



export default function Horizonlal_nav() {
    return (
        <>
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
                <Link to="/experience" className="transition-transform duration-200 hover:scale-110 hover:text-[#ff2a1a]">
                    <button className="nav_bar">Experience</button>
                </Link>
                
            </nav>

        </>
    );
}