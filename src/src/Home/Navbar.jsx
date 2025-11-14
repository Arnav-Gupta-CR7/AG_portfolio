import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" fixed top-0 left-7 h-screen w-48 flex flex-col pt-10 text-[#B30C04] text-4xl orbitron-600">
      <Link to="/about" className="mb-15 transition-transform duration-200 hover:scale-110">About Me</Link>
      <Link to="/projects" className="mb-15 transition-transform duration-200 hover:scale-110">Projects</Link>
      <Link to="/experience" className="mb-15 transition-transform duration-200 hover:scale-110">Experience</Link>
      <Link to="/connect" className="mb-15 transition-transform duration-200 hover:scale-110">Connect</Link>
    </nav>
  );
}


