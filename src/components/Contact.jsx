import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {

  const form = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("Sending...");

    emailjs.sendForm(
      "service_j0rft9q",
      "template_z0kvjrb",
      form.current,
      "kvXSUNdTcCcnHKGlN"
    )
    .then(() => {
      form.current.reset();
      setStatus("Message Sent Successfully ✅");
      setSending(false);

      setTimeout(() => setStatus(""), 3000);
    })
    .catch((error) => {
      console.error(error);
      setStatus("Failed to send message ❌");
      setSending(false);
    });
  };


  // 📲 WhatsApp Config
  const phoneNumber = "917903651757"; 

  const message =
    "Hello Rohit, I visited your portfolio and want to discuss a project.";

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  return (
    <section id="contact" className="min-h-screen px-8 py-20 bg-gray-50">

      {/* Heading */}
      <div className="text-center mb-16">

        <h2 className="text-4xl font-bold">
          Contact <span className="text-teal-600">Me</span>
        </h2>

        <p className="text-gray-600 mt-3">
          Prefer WhatsApp? You can contact me instantly.
        </p>

      </div>


      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border p-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border p-3 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="border p-3 rounded"
          required
        />

        {/* Email Button */}
        <button
          type="submit"
          disabled={sending}
          className={`py-3 rounded text-white transition
            ${sending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700"
            }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>


        {/* Status */}
        {status && (
          <p className="text-center text-sm mt-2">
            {status}
          </p>
        )}


        {/* OR Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>


        {/* WhatsApp Button */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center gap-2
            bg-green-500 hover:bg-green-600
            text-white py-3 rounded
            transition
          "
        >
          <FaWhatsapp className="text-xl" />
          Contact on WhatsApp
        </a>

      </form>

    </section>
  );
}
