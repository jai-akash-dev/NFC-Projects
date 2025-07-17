import React from "react";

export default function Map() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 map ">
      <center><h2 className="text-2xl font-bold text-center mb-4">Home location</h2></center>
      <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Business Location"
          className="w-full h-full"
          src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4032313984667!2d80.22158729999998!3d13.073611700000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526684b148c161%3A0x6a97bf58239b848!2sSky%20Walk%2C%201%2C%20Nelson%20Manickam%20Rd%2C%20near%20Ampa%20Skyone%2C%20Aminjikarai%2C%20Chennai%2C%20Tamil%20Nadu%20600029!5e0!3m2!1sen!2sin!4v1739609071023!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );

}

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4032313984667!2d80.22158729999998!3d13.073611700000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526684b148c161%3A0x6a97bf58239b848!2sSky%20Walk%2C%201%2C%20Nelson%20Manickam%20Rd%2C%20near%20Ampa%20Skyone%2C%20Aminjikarai%2C%20Chennai%2C%20Tamil%20Nadu%20600029!5e0!3m2!1sen!2sin!4v1739609071023!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}