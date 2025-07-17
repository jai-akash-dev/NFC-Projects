import React from "react";

export default function Map() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 map ">
      <h2 className="text-2xl font-bold text-center mb-4">Find me here</h2>
      <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Business Location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.843694484985!2d80.16925766977539!3d13.069948599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261513764b651%3A0xdf78ce9fa512f3ce!2sDr.%20M.G.R.%20Engineering%20College!5e0!3m2!1sen!2sin!4v1739122574688!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
