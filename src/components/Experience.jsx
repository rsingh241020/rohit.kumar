export default function Experience() {
  const experience = [
    {
      role: "Data Analyst",
      company: "Greenpanel Industries Private Limited",
      duration: "Nov 2025 - Present",
      desc: "Worked on data analysis, reporting, and dashboard creation using SQL, Excel, and BI tools to generate business insights.",
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Target Integration",
      duration: "3 Month Internship",
      desc: "Worked on full-stack web development projects using React, Java, and REST APIs. Contributed to UI development and backend integration.",
    },
    {
      role: "MCA (Master of Computer Applications)",
      company: "Post Graduation",
      duration: "2023 – 2025",
      desc: "Pursuing MCA with specialization in software development, data analytics, and enterprise technologies.",
    },
    {
      role: "Full-Stack & Data Analyst Trainee",
      company: "AccioJob",
      duration: "2019 Jan – July 2023",
      desc: "Completed intensive training in full-stack development and data analytics. Built real-world projects using React, Java, SQL, and analytics tools.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-8 py-20 bg-teal-50"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16 reveal-top">
        My <span className="text-teal-600">Experience</span>
      </h2>

      {/* Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {experience.map((exp, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg reveal-left hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-bold">{exp.role}</h3>

            <h4 className="text-teal-600">{exp.company}</h4>

            <span className="text-sm text-gray-500">
              {exp.duration}
            </span>

            <p className="text-gray-600 mt-2">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
