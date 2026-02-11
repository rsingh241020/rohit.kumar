import {
  FaCode,
  FaJava,
  FaDatabase,
  FaChartBar,
  FaChartPie,
} from "react-icons/fa";

export default function Services() {

  const services = [
    {
      icon: <FaCode />,
      title: "Business Website Development",
      desc: "Modern, responsive websites for startups, brands, and businesses designed to generate leads and conversions.",
    },
    {
      icon: <FaJava />,
      title: "Full-Stack Web Applications",
      desc: "Custom web apps with authentication, dashboards, and REST APIs using React and Java backend systems.",
    },
    {
      icon: <FaDatabase />,
      title: "Admin Panels & Databases",
      desc: "Secure admin dashboards, database design, and scalable backend management solutions.",
    },
    {
      icon: <FaChartBar />,
      title: "Data Analytics & Dashboards",
      desc: "Interactive dashboards, SQL reporting, and BI insights to support business decision-making.",
    },
    {
      icon: <FaChartPie />,
      title: "SAP BOBI Reporting",
      desc: "Enterprise reporting and analytics solutions using SAP BusinessObjects & Web Intelligence tools.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen px-8 py-24 bg-gray-50"
    >

      {/* ===== HEADING ===== */}
      <div className="max-w-3xl mx-auto text-center mb-16">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="text-teal-600">Freelance Services</span>
        </h2>

        <p className="text-gray-600 leading-relaxed">

          I provide end-to-end development and analytics
          solutions tailored for startups, businesses, and
          entrepreneurs — from scalable web applications
          to data dashboards and enterprise reporting.

        </p>

      </div>

      {/* ===== GRID ===== */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center"
          >

            <div className="text-4xl text-teal-600 mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
