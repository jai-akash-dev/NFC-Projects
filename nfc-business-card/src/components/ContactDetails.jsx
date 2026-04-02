import React from "react";

const card = {
  name: "Jonathan Carter",
  role: "UI/UX Designer & Creative Director",
  email: "jonathan.carter@email.com",
  phone: "+12345678901",
  website: "https://www.carterdesigns.com",
  slug: "jonathan-carter",
};

export default function ContactDetails() {
  const handleAddContact = () => {
    const vcfContent = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${card.name}`,
      `TITLE:${card.role}`,
      `TEL:${card.phone}`,
      `EMAIL:${card.email}`,
      `URL:${card.website}`,
      `NOTE:bytinydots.in/c/${card.slug}`,
      "END:VCARD",
    ].join("\n");

    window.location.href =
      `data:text/vcard;charset=utf-8,${encodeURIComponent(vcfContent)}`;
  };

  return (
    <div className="contactDetails">
      <h2>Contact Details</h2>
      <p>📧 Email: {card.email}</p>
      <p>📞 Phone: {card.phone}</p>
      <p>
        🌐 Website:{" "}
        <a href={card.website} target="_blank" rel="noopener noreferrer">
          {card.website}
        </a>
      </p>

      <button
        onClick={handleAddContact}
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Save Contact
      </button>
    </div>
  );
}