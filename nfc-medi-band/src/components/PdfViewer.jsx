import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MapHospital from './MapHospital'
import Footer from './Footer'

const pdfUrl = window.location.origin + "/sample.pdf"; // Ensure 'sample.pdf' is inside the 'public/' folder

export default function PdfViewer() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // const correctPassword = "1965-08-06"; // Password for authentication

  const correctPassword = "123";

  useEffect(() => {
    // Detect if the user is on a mobile device
    setIsMobile(/Mobi|Android|iPhone/i.test(navigator.userAgent));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password! Try again.");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4 center ">Full Medical Report</h2>

      {!isAuthenticated ? (
        <form onSubmit={handleSubmit} className="text-center reportForm ">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md ml-2"
          >
            Unlock Report
          </button>
        </form>
      ) : (
        <div className="mt-4">
          {isMobile ? (
            // Show "View Full Report" button instead of an iframe on mobile
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-md block text-center"
            >
              View Full Report
            </a>
          ) : (
            // Show embedded PDF viewer on desktop
            <iframe
              src={pdfUrl}
              width="100%"
              height="600px"
              className="border rounded-md shadow-lg"
              title="PDF Viewer"
            />
          )}

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = pdfUrl;
              link.download = "Medical_Report.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 block mx-auto"
          >
            Download Report
          </button>
        </div>
      )}

      <button
        onClick={() => navigate(-1)}
        className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 block mx-auto"
      >
        Go Back
      </button>

      <MapHospital />
      <Footer />

    </div>
  );
}
