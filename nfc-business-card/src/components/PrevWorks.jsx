import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import work1 from '../assets/img1.jpg'
import work2 from '../assets/img2.jpg'
import work3 from '../assets/img3.jpg'
import work4 from '../assets/img4.jpg'
import work5 from '../assets/img5.jpg'
import work6 from '../assets/img6.jpeg'

export default function PrevWorks() {
  const images = [ work1, work2, work3, work4, work5, work6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/samples.pdf";  
    link.download = "Design samples.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-3xl mx-auto prevWorks">
      <h2 className="text-2xl font-bold text-center mb-4">Previous Works</h2>
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
      <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded-md">More samples</button>
    </div>
  );
}
