import CardPro from "./components/Card_pro";

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
    <section
      id="projects"
      className="min-h-screen bg-black text-red-500 px-0 py-12 orbitron-500"
    >
      <h2 className="text-3xl font-bold text-red-400 mb-8 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-x-4 gap-y-6 justify-items-center">
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
    </section>
  );
}
