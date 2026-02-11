export default function Testimonials() {

  const data = [
    {
      name: "Vivek Kumar",
      company: "Trylity",
      text: "Currently collaborating with Rohit on WhatsApp integration and automation systems. His technical expertise and problem-solving approach are adding great value to our platform.",
    },
    {
      name: "Vryno",
      company: "Internship Collaboration",
      text: "Demonstrated strong full-stack development skills while working on dashboards and backend integrations. Delivered tasks with clarity and consistency.",
    },
    {
      name: "Project Collaboration",
      company: "Development Projects",
      text: "Built scalable applications and management systems with clean UI and structured architecture. Highly committed to delivery timelines.",
    },
  ];


  return (
    <section className="min-h-screen bg-teal-50 px-8 py-20">

      {/* ===== HEADING ===== */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Client <span className="text-teal-600">Testimonials</span>
      </h2>


      {/* ===== GRID ===== */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {data.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition"
          >

            {/* Feedback */}
            <p className="mb-4 text-gray-600 italic">
              "{t.text}"
            </p>

            {/* Name */}
            <h4 className="font-bold text-lg">
              — {t.name}
            </h4>

            {/* Company / Source */}
            <span className="text-sm text-teal-600">
              {t.company}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}
