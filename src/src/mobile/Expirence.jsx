import Card from "./components/Card_exp";

export default function Expirence() {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 bg-black text-red-500 px-6"
      >

        {/* Left Card */}
        <div className="md:w-1/2 flex justify-center">
          <Card />
        </div>

        {/* Right Text Area */}
        <div className="md:w-1/2 text-left text-sm text-gray-300 leading-relaxed orbitron-400">

          

          {/* Experience Header */}
          <h2 className="text-xl font-semibold text-red-500 mb-2">Experience</h2>

          {/* Experience Details */}
          <h3 className="text-lg text-gray-200">
            Full Stack Developer Intern — dWise Healthcare
          </h3>
          <p className="text-xs opacity-70 mb-3">September 2025 – November 2025</p>

          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mb-4 tracking-wide leading-relaxed">
            <li>Boosted Scheduler performance by ~20% using Angular + Spring Boot.</li>
            <li>Cut DB load 70%+ with a recurrence-rule time-blocking system.</li>
            <li>Built real-time scheduling APIs for faster responses.</li>
            <li>Added “Nearest Slot” feature reducing user search time ~40%.</li>
          </ul>

          {/* Resume Button */}
          <a
            href="https://docs.google.com/document/d/1pUkJ9lnxXjzgd5GaNcWfFAn-8Z5hz6q_dFIbMeY2OqE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 border border-red-500 rounded-md hover:bg-red-500 hover:text-black transition"
          >
           Resume
          </a>
        </div>

      </section>
    </>
  );
}
