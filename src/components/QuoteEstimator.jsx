import { useState, useEffect } from "react";

export default function QuoteEstimator({ open, close }) {

  const [project, setProject] = useState("");

  // Auto close after 10 sec
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        close();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [open, close]);

  if (!open) return null;


  // Quote Data
  const quoteData = {
    website: {
      price: "₹5,000 – ₹15,000",
      time: "5 – 10 Days"
    },
    webapp: {
      price: "₹15,000 – ₹40,000",
      time: "10 – 25 Days"
    },
    dashboard: {
      price: "₹10,000 – ₹30,000",
      time: "7 – 20 Days"
    },
    automation: {
      price: "₹20,000+",
      time: "15 – 30 Days"
    }
  };


  const data = quoteData[project];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md text-center">

        <h3 className="text-xl font-bold mb-4">
          Quick Project Estimate
        </h3>

        {/* Project Select */}
        <select
          onChange={(e) => setProject(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        >
          <option value="">Select Project Type</option>
          <option value="website">Business Website</option>
          <option value="webapp">Web Application</option>
          <option value="dashboard">Dashboard / Analytics</option>
          <option value="automation">Automation System</option>
        </select>


        {/* Result Box */}
        {data && (
          <div className="bg-teal-50 p-4 rounded mb-4">

            <p className="text-sm">
              💰 Estimated Cost:
            </p>

            <p className="font-bold text-teal-700">
              {data.price}
            </p>

            <p className="text-sm mt-2">
              ⏳ Delivery Time:
            </p>

            <p className="font-bold text-teal-700">
              {data.time}
            </p>

          </div>
        )}


        {/* CTA */}
        <button
          onClick={close}
          className="bg-teal-600 text-white px-4 py-2 rounded"
        >
          Continue Discussion
        </button>

      </div>
    </div>
  );
}
