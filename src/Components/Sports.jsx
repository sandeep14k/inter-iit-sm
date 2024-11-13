import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sports.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`}
      style={style}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}
      style={style}
      onClick={onClick}
    />
  );
}

const sports = [
  { name: "Cricket", image: "../../Sports/iism/cricket.jpg" },
  { name: "Badminton", image: "../../Sports/iism/badminton.jpg" },
  { name: "Basketball", image: "../../Sports/iism/basketball.jpg" },
  { name: "Hockey", image: "../../Sports/iism/hockey.jpg" },
  { name: "Football", image: "../../Sports/iism/football.jpg" },
  { name: "Lawn Tennis", image: "../../Sports/iism/tennis.jpg" },
  { name: "Table Tennis", image: "../../Sports/iism/tt.jpg" },
  { name: "Swimming", image: "../../Sports/iism/swimming.jpg" },
  { name: "Athletics", image: "../../Sports/iism/athletics.jpg" },
  { name: "Water Polo", image: "../../Sports/iism/waterpolo.jpg" },
  { name: "Weightlifting", image: "../../Sports/iism/weight_lifting.jpg" },
  { name: "Squash", image: "../../Sports/iism/squash.jpg" },
  { name: "Volleyball", image: "../../Sports/iism/volleyball.jpg" },
  { name: "Kho Kho", image: "../../Sports/iism/khokho.jpg" }
];

const Sports = () => {
  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 920, settings: { centerMode: true, slidesToShow: 2 } },
      { breakpoint: 768, settings: { centerMode: true, slidesToShow: 2 } },
      { breakpoint: 600, settings: { centerMode: true, slidesToShow: 1.25 } },
      { breakpoint: 480, settings: { centerMode: false, slidesToShow: 1 } },
    ],
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Sports at Play</h2>
      <p className="carousel-description">
        Welcome to the highly anticipated Inter-IIT Sports Meet, 2024! This
        year's competition promises to be an exhilarating showcase of athletic
        talent, teamwork, and sportsmanship. Here's a glimpse into the exciting
        games that will be featured:
      </p>
      <Slider {...settings} className="carousel-slider">
        {sports.map((sport, index) => (
          <div key={index} className="sport-item">
            <div className="sport-image-container">
              <img src={sport.image} alt={sport.name} className="sport-image" />
              <div className="sport-overlay">
                <div className="nameSports">{sport.name}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sports;
