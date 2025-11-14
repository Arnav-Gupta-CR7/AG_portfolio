import { useState } from "react";

const InputEmail = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);
   
    const res = await fetch("https://formspree.io/f/manppond", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else setStatus("error");
  };

  return (
    <div className="relative w-full max-w-md mx-auto font-mono">
      <form
        onSubmit={handleSubmit}
        className="relative p-6 bg-black border-2 border-red-500 rounded-lg shadow-lg overflow-hidden"
      >
        {/* decorative corners */}
        <div className="absolute top-0 left-0 w-6 h-1 bg-red-500" />
        <div className="absolute top-0 left-0 w-1 h-6 bg-red-500" />
        <div className="absolute top-0 right-0 w-6 h-1 bg-red-500" />
        <div className="absolute top-0 right-0 w-1 h-6 bg-red-500" />
        <div className="absolute bottom-0 left-0 w-6 h-1 bg-red-500" />
        <div className="absolute bottom-0 left-0 w-1 h-6 bg-red-500" />
        <div className="absolute bottom-0 right-0 w-6 h-1 bg-red-500" />
        <div className="absolute bottom-0 right-0 w-1 h-6 bg-red-500" />

        <label
          className="mb-3 text-red-400 text-sm tracking-wider flex items-center"
          htmlFor="email"
        >
          <span className="mr-2 text-red-600">➜</span>
          <span className="text-red-300 font-bold">SEND MESSAGE</span>
          <span className="ml-2 opacity-75 animate-pulse">▋</span>
        </label>

        <input
          className="w-full bg-transparent text-red-300 text-base border-2 border-red-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-600 placeholder-red-600/60 pr-10"
          placeholder="➤ Your email"
          id="email"
          type="email"
          name="_replyto"
          required
        />

        <textarea
          name="message"
          required
          placeholder="➤ Your message"
          className="w-full mt-4 bg-transparent text-red-300 border-2 border-red-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-600 placeholder-red-600/60"
          rows={2}
        />

        <button
          type="submit"
          className="mt-4 w-full bg-red-600 text-black font-bold rounded-md py-2 hover:bg-red-700 transition-colors"
        >
          {status === "idle" && "Send"}
          {status === "sending" && "Sending..."}
          {status === "sent" && "Sent!"}
          {status === "error" && "Error! Retry"}
        </button>

        <p className="mt-2 text-xs text-red-400 opacity-80">
          Your message will be sent securely. No spam, just cyberpunk vibes.
        </p>
      </form>
    </div>
  );
};

export default InputEmail;
