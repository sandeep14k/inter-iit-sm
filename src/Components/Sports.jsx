import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sports.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        display: "block",
        background: "white",
        right: "13%",
        top: "50%",
        zIndex: "1",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        left: "10%",
        top: "50%",
        zIndex: "1",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

const sports = [
{ name: "Cricket", image: "../../Sports/iism/cricket.jpg" },
  { name: "Badminton", image: "../../Sports/iism/badminton.jpg" },
  { name: "Basket Ball", image: "../../Sports/iism/basketball.jpg" },
  { name: "Hockey", image: "../../Sports/iism/hockey.jpg" },
  { name: "Football", image: "../../Sports/iism/football.jpg"},
  { name: "Lawn Tennis", image: "../../Sports/iism/tennis.jpg"},
  { name: "Table Tennis", image: "../../Sports/iism/tt.jpg"},
  { name: "Swimming", image: "../../Sports/iism/swimming.jpg"},
  { name: "Athletics", image: "../../Sports/iism/athletics.jpg" },
  { name: "Water Polo", image: "../../Sports/iism/waterpolo.jpg" },
  { name: "Weightlifting", image: "../../Sports/iism/weight_lifting.jpg" },
  { name: "Squash" , image: "../../Sports/iism/squash.jpg"},
  { name: "Volleyball", image: "../../Sports/iism/volleyball.jpg"},
  {name: "Kho Kho", image: "../../Sports/iism/khokho.jpg"}
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
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1.25,
          slidesToScroll: 1,
      }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container mx-auto my-8 bg-black w-[100vw] flex flex-col justify-center items-center">
      <h2 className="text-center sm:text-7xl text-4xl text-white mt-8 sm:h-[100px] h-[80px] font-bold mb-4">
        Sports at Play
      </h2>
      <div className="sports sm:text-lg text-base lg:px-[100px] sm:px-[50px] px-[10px] sm:min-h-[0vh] min-h-[35vh] sm:max-h-[35vh] w-[90vw] text-white mb-5">
        Welcome to the highly anticipated Inter-IIT Sports Meet, 2024! This
        year's competition promises to be an exhilarating showcase of athletic
        talent, teamwork, and sportsmanship. Here's a glimpse into the exciting
        games that will be featured:
      </div>
      <Slider
        {...settings}
        className="btn overflow-visible w-[100vw] mx-auto flex flex-row justify-center items-center"
      >
        {sports.map((sport, index) => (
          <div key={index} className="sports_main ">
            <div className=" sports overflow-y-hidden relative sm:w-[510px] w-[300px] saturate-[0.4] contrast-[0.7] hover:saturate-[1] hover:contrast-[1] hover:brightness-150 transition-all hover:scale-105 hover:z-10 m-2">
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full sm:h-[300px] h-[240px] object-cover "
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex">
                <div className="sports_name md:text-[45px] text-[30px] text-white text-center  font-semibold absolute bottom-0 left-0 m-4">
                  {sport.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sports;
