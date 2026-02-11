import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {

  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs.sendForm(
      "service_j0rft9q",
      "template_z0kvjrb",
      form.current,
      "kvXSUNdTcCcnHKGlN"
    )
    .then(() => {
      setStatus("Message Sent Successfully ✅");
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      setStatus("Failed to send message ❌");
    });
  };

  return (
    <section id="contact" className="min-h-screen px-8 py-20 bg-gray-50">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Hire Me / <span className="text-teal-600">Get In Touch</span>
        </h2>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="border p-3 rounded"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Project Subject"
          className="border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Project Details / Message"
          rows="5"
          className="border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-teal-600 text-white py-3 rounded hover:bg-teal-700"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center text-sm mt-2">
            {status}
          </p>
        )}

      </form>

    </section>
  );
}
