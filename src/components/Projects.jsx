export default function Projects() {

  const projects = [
    {
      title: "Trylity – WhatsApp Integration System",
      desc: "Working on WhatsApp automation and API integration system to enable real-time communication, notification workflows, and customer engagement solutions.",
      tech: "React • Java • REST APIs • Automation",
      link: "https://trylity.com",
      type: "Freelance Project",
    },
    {
      title: "Ride Pooling Web Application",
      desc: "Developed a full-stack ride pooling platform with JWT authentication, booking workflows, and real-time ride management features.",
      tech: "React • Spring Boot • MySQL",
      link: "https://ridepool-app.vercel.app/",
      type: "Full-Stack Application",
    },
    {
      title: "Employee Management System",
      desc: "Built a hierarchy-based employee management dashboard with CRUD operations, admin controls, and structured role management.",
      tech: "React • Dashboard UI • CRUD",
      link: "https://ems-crud-system-project.vercel.app/employees",
      type: "Business Dashboard",
    },
  ];


  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-20"
    >

      {/* ===== HEADING ===== */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-bold">
          Featured <span className="text-teal-600">Work</span>
        </h2>
      </div>


      {/* ===== PROJECT GRID ===== */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition"
          >

            {/* Type Badge */}
            <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
              {p.type}
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold mt-3 mb-2">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-3">
              {p.desc}
            </p>

            {/* Tech Stack */}
            <p className="text-sm text-teal-600 font-medium mb-4">
              {p.tech}
            </p>

            {/* Live Demo */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white bg-gray-900 px-4 py-2 rounded-full hover:bg-black transition"
            >
              Live Demo
            </a>

          </div>
        ))}

      </div>


      {/* ===== MANY MORE (RIGHT SIDE ABOVE SUMMARY) ===== */}
      <div className="max-w-6xl mx-auto flex justify-end mt-8">

        <a
          href="#"
          className="text-sm text-teal-600 font-medium hover:underline"
        >
          + Many More →
        </a>

      </div>


      {/* ===== SUMMARY LINE ===== */}
      <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">

        Delivering scalable web applications, automation systems,
        and business dashboards across freelance and personal
        development projects — focused on performance, usability,
        and real-world impact.

      </p>

    </section>
  );
}
