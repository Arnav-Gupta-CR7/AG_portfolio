import { useState } from "react";
import "./ContactForm.css"; // keep your glitch styles here

function ContactForm() {
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
    <div className="glitch-form-wrapper">
      <form className="glitch-card" onSubmit={handleSubmit}>
        <div className="card-header">
          <div className="card-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M12 11.5a3 3 0 0 0 -3 2.824v1.176a3 3 0 0 0 6 0v-1.176a3 3 0 0 0 -3 -2.824z" />
            </svg>
            <span>CONTACT_ME</span>
          </div>

          <div className="card-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="card-body">
          <div className="form-group">
            <input type="text" id="name" name="name" required placeholder="" />
            <label htmlFor="name" className="form-label" data-text="NAME">
              NAME
            </label>
          </div>

          <div className="form-group">
            <input type="email" id="email" name="_replyto" required placeholder="" />
            <label htmlFor="email" className="form-label" data-text="EMAIL">
              EMAIL
            </label>
          </div>

          <div className="form-group">
            <textarea id="message" name="message" required placeholder="" />
            <label htmlFor="message" className="form-label" data-text="MESSAGE">
              MESSAGE
            </label>
          </div>

          <button
            data-text="SEND_MESSAGE"
            type="submit"
            className="submit-btn"
            disabled={status === "sending"}
          >
            <span className="btn-text text-xs">
              {status === "sending" ? "SENDING..." : "SEND_MESSAGE"}
            </span>
          </button>

          {status === "sent" && <p className="success-msg text-xs">Thanks — message sent.</p>}
          {status === "error" && <p className="error-msg text-xs">Something went wrong.</p>}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
