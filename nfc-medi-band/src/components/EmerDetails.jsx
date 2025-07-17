import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import work1 from "../assets/img1.png";
import work2 from "../assets/img2.png";
import work3 from "../assets/img3.png";
import work4 from "../assets/img4.png";
import work5 from "../assets/img5.png";
import work6 from "../assets/img6.png";

export default function EmerDetails() {
  const navigate = useNavigate(); // 🔹 Use React Router's navigation hook

  const images = [work1, work2, work3, work4, work5, work6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-3xl mx-auto prevWorks">
      <center>
        <h2 className="text-2xl font-bold text-center mb-4">Short Report</h2>
      </center>
      <Slider {...settings} className="carousel">
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <div className="aspect-[16/9]">
              <img
                src={image}
                alt={`Work ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
      <button 
        onClick={() => navigate("/pdf-viewer")} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        View Full Report
      </button>
    </div>
  );
}
