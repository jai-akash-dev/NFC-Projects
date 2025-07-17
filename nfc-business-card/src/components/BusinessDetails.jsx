import React from 'react';

export default function BusinessDetails() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/catalog.pdf";  
    link.download = "Catalog.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='businessDetails'>
      <h2>Business Details</h2>
      <h3>I offer freelance services in:</h3>
      <ul>
        <li>UI/UX Design</li>
        <li>Web Development</li>
        <li>Branding & Logo Design</li>
        <li>Mobile App Design</li>
      </ul>

      <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Download Catalog
      </button>

      {/* <a 
        href="/catalog.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-500 text-white px-4 py-2 rounded-md ml-2 inline-block"
      >
        View Catalog
      </a> */}
    </div>
  );
}
