import FullscreenGif from "./FullscreenGif";
import Baground_about from "./Baground_about";

export default function About() {
  return (
    <>
      <FullscreenGif/>
      <Baground_about />

      {/* Fixed scrollable card */}
      <div
  className="fixed top-1/2 left-1/2 
  w-[550px] h-[650px] 
  -translate-x-1/2 -translate-y-1/2
  bg-white/20 backdrop-blur-md text-white
  rounded-2xl shadow-2xl overflow-y-auto p-8"
>
  <h1 className="text-3xl font-bold mb-6 orbitron-600 text-">About Me</h1>

  <div className="orbitron-400 tracking-wide leading-relaxed">
    Hey, I’m Arnav Gupta — a computer science student with a soft spot for glowing circuits, bold ideas, and the kind of tech that feels like it belongs in tomorrow’s world. I’m endlessly curious: the sort of person who can lose hours poking at a problem, experimenting with weird solutions, and rewriting things until they feel right.
  </div>
  <div className="orbitron-400 tracking-wide leading-relaxed mt-4 text-neutral-950">
    I grew up fascinated by how digital worlds are built — the invisible rules, the elegant logic, the chaotic creativity underneath it all. That fascination slowly evolved into a passion for programming, design, and building tools that actually make people stop and think, “Oh, that’s cool.”
  </div>
  <div className="orbitron-400 tracking-wide leading-relaxed mt-4">
    These days, I dive deep into code, interfaces, and futuristic visual styles. I love blending technical precision with aesthetics that feel a little rebellious — sharp lines, neon contrasts, glitch textures, and anything that breaks the expectation of “plain.” Whether I’m developing a project from scratch, optimizing performance, or experimenting with new tech stacks, I aim to create work that feels alive… like it’s humming with its own quiet electricity.
  </div>
  <div className="orbitron-400 tracking-wide leading-relaxed mt-4 text-neutral-950">
    At my core, I’m someone who values creativity, clarity, and pushing boundaries. I want to build things that stand out — not because they’re loud, but because they’re thoughtfully engineered, visually striking, and unmistakably personal.
  </div>
</div>

    </>
  );
}

