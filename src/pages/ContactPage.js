import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contactpage.css";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setStatus("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.send(
      "service_e17ol8b",
      "template_xluu3kf",
      form,
      "CxUnaA64wJHXdGxWj"
    )
    .then(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" }); // clear form only
    })
    .catch(() => {
      setStatus("error");
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">

        <h1>📩 Contact Me</h1>
        <p>Send me a message and I’ll get back to you.</p>

        <form onSubmit={sendEmail}>

          {/* Inputs */}
          <div className="contact-inputs">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Buttons */}
          <div className="contact-btn-group">
            <button type="submit">
              {status === "sending" ? "Sending..." : "Send"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="contact-reset-btn"
            >
              Reset
            </button>
          </div>

        </form>

        {/* Status */}
        {status === "success" && (
          <p className="contact-success">✅ Message sent!</p>
        )}

        {status === "error" && (
          <p className="contact-error">❌ Failed. Try again.</p>
        )}

      </div>
    </div>
  );
};

export default ContactPage;







