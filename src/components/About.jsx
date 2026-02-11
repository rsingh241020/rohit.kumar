export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 py-20 bg-teal-50"
    >

      <div className="max-w-3xl text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why <span className="text-teal-600">Work With Me</span>
        </h2>

        {/* Short Intro */}
        <p className="text-gray-600 leading-relaxed mb-10">
          I collaborate with startups, small businesses, and
          entrepreneurs to deliver scalable web applications,
          admin dashboards, and analytics solutions that solve
          real business problems — not just technical tasks.
        </p>

        {/* Points */}
        <div className="grid md:grid-cols-2 gap-6 text-left">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">
              Business-Focused Development
            </h3>
            <p className="text-gray-600 text-sm">
              Solutions designed to improve workflow,
              automation, and operational efficiency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">
              Full-Stack Expertise
            </h3>
            <p className="text-gray-600 text-sm">
              End-to-end development using React,
              Java, APIs, and database systems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">
              Data & Analytics Solutions
            </h3>
            <p className="text-gray-600 text-sm">
              SQL reporting, dashboards, and BI
              insights for smarter decision-making.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">
              Reliable Project Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Clean code, responsive UI, and
              on-time freelance project delivery.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
