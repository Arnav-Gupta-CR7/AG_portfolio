import Card from "./components/Card_about";

export default function Aboutme() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 bg-black text-red-500 px-6"
    >
      {/* text area */}
      <div className="orbitron-500 text-center md:text-left md:w-1/2">
        <h2 className="text-3xl font-bold text-red-400 mb-4 orbitron-800">About Me</h2>
        <p className="text-sm text-gray-300 leading-relaxed orbitron-400">
          I'm a full-stack developer working on scalable web and blockchain solutions, focused on clarity, performance, and reliability
        </p>
      </div>

      {/* card area */}
      <div className="md:w-1/2 flex justify-center">
        <Card />
      </div>
    </section>
  );
}
