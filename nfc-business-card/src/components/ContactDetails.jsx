import React from "react";

export default function ContactDetails() {
  const vCardUrl = "/download.vcf"; // Hosted vCard file

  const handleAddContact = () => {
    window.location.href = vCardUrl; // Opens vCard in "Add Contact"
  };

  return (
    <div className="contactDetails">
      <h2>Contact Details</h2>
      <p>📧 Email: jonathan.carter@email.com</p>
      <p>📞 Phone: +1 234 567 8901</p>
      <p>🌐 Website: <a href="https://www.carterdesigns.com" target="_blank" rel="noopener noreferrer">www.carterdesigns.com</a></p>

      <button 
        onClick={handleAddContact} 
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Add Contact
      </button>
    </div>
  );
}
