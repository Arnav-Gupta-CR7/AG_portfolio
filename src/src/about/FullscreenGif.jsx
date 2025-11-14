import { useEffect, useState } from "react";

export default function FullscreenGif() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide GIF after 3 seconds
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img src='/AWAKEN-AKIRA.gif' alt="loading" className="w-full h-full object-cover" />
    </div>
  );
}
