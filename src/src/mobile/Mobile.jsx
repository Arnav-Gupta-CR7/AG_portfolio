import Aboutme from "./Aboutme";
import Expirence from "./Expirence";
import Connect from "./Connect";
import Projects from "./Projects";

function Mobile() {
  return (
    <div className="bg-black text-red-500 scroll-smooth min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 z-50 flex justify-around py-3 border-b border-red-600 text-sm orbitron-600">
        <a href="#about" className="hover:text-red-400">About</a>
        <a href="#projects" className="hover:text-red-400">Projects</a>
        <a href="#experience" className="hover:text-red-400">Experience</a>
        <a href="#connect" className="hover:text-red-400">Connect</a>
      </nav>

      <main className="pt-16 space-y-32 px-6">
        {/* About */}
        <section id="about" className="min-h-screen flex flex-col justify-center">
          <Aboutme/>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen flex flex-col justify-center">
          <Projects/>
        </section>

        {/* Experience */}
        <section id="experience" className="min-h-screen flex flex-col justify-center">
          <Expirence/>
        </section>

        {/* Connect */}
        <section id="connect" className="min-h-screen flex flex-col justify-center">
          <Connect/>
        </section>
      </main>
    </div>
  );
}

export default Mobile;
