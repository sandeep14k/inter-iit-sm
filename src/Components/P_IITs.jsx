import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./P_IITs.css"; // Import CSS file for styles

const P_IITs = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
    draggable: true,
    swipeToSlide: true,
    pauseOnHover: true,
  };

  const IITs = [
    { name: "IIT Bombay", img: "../../IITs_Logo/Bombay.svg" },
    { name: "IIT Delhi", img: "../../IITs_Logo/Delhi.jpg" },
    { name: "IIT Madras", img: "../../IITs_Logo/Madras.jpg" },
    { name: "IIT Kanpur", img: "../../IITs_Logo/Kanpur.svg" },
    { name: "IIT Kharagpur", img: "../../IITs_Logo/KGP.jpg" },
    { name: "IIT Roorkee", img: "../../IITs_Logo/Roorkee.svg" },
    { name: "IIT Guwahati", img: "../../IITs_Logo/Guwahati.jpg" },
    { name: "IIT Hyderabad", img: "../../IITs_Logo/Hyderabad.jpg" },
    { name: "IIT Indore", img: "../../IITs_Logo/Indore.jpg" },
    { name: "IIT Varanasi (BHU)", img: "../../IITs_Logo/BHU.jpg" },
    { name: "IIT Jodhpur", img: "../../IITs_Logo/Jodhpur.jpg" },
    { name: "IIT Mandi", img: "../../IITs_Logo/Mandi.jpg" },
    { name: "IIT Patna", img: "../../IITs_Logo/Patna.jpg" },
    { name: "IIT Ropar", img: "../../IITs_Logo/Ropar.jpg" },
    { name: "IIT Bhubaneswar", img: "../../IITs_Logo/Bhubaneshwar.jpg" },
    { name: "IIT Gandhinagar", img: "../../IITs_Logo/Gandhinagar.jpg" },
    { name: "IIT (ISM) Dhanbad", img: "../../IITs_Logo/Dhanbad.jpg" },
    { name: "IIT Bhilai", img: "../../IITs_Logo/Bhilai.jpg" },
    { name: "IIT Goa", img: "../../IITs_Logo/Goa.jpg" },
    { name: "IIT Jammu", img: "../../IITs_Logo/Jammu.jpg" },
    { name: "IIT Dharwad", img: "../../IITs_Logo/Dharwad.jpg" },
    { name: "IIT Palakkad", img: "../../IITs_Logo/Palakkad.jpg" },
    { name: "IIT Tirupati", img: "../../IITs_Logo/Tirupati.jpg" },
  ];

  const sliderRef = useRef(null);

  const handleScroll = (event) => {
    if (event.deltaY < 0) {
      sliderRef.current.slickPrev();
    } else if (event.deltaY > 0) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="p-iits-container">
      <fieldset>
        <legend className="p-iits-title">Participating IITs</legend>
      </fieldset>
      <div className="slider-container" onWheel={handleScroll}>
        <Slider {...settings} ref={sliderRef} className="slider">
          {IITs.map((iit, index) => (
            <div key={index} className="iit-cardHome">
              <div className="iit-logoHome">
                <img src={iit.img} alt={iit.name} className="iit-image" />
              </div>
              <p className="iit-name">{iit.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default P_IITs;
