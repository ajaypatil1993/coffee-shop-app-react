import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nunc ultricies ipsum",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 2,
    name: "John Doe",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nunc ultricies ipsum",
    img: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 3,
    name: "John Doe",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nunc ultricies ipsum",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    name: "John Doe",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nunc ultricies ipsum",
    img: "https://i.pravatar.cc/150?img=8",
  },

];
const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-12">
      <div className="container">
        {/* Header section */}
        <div 
        data-aos="fade-up"
        className="text-center mb-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data, index) => {
              return (
                <div key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-6 px-6 mx-4 rounded-xl bg-primary/10 relative">
                    {/* Image section */}
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    {/* content section */}
                    <div className="flex flex-col gap-4 items-center">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/60 font-cursive ">{data.name}</h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
