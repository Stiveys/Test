import React from "react";
import {
  FaShopify,
  FaPaypal,
  FaSlack,
  FaTrello,
  FaAmazonPay,
} from "react-icons/fa";
import Slider from "react-slick";

const companiesData = [
  {
    id: 1,
    icon: <FaShopify size={28} />,
    name: "shopify",
  },
  {
    id: 2,
    icon: <FaPaypal size={28} />,
    name: "paypal",
  },
  {
    id: 3,
    icon: <FaSlack size={28} />,
    name: "slack",
  },
  {
    id: 4,
    icon: <FaAmazonPay size={28} />,
    name: "AmazonPay",
  },
  {
    id: 5,
    icon: <FaTrello size={28} />,
    name: "Trello",
  },
];

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlides: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlides: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-black text-white py-4">
      <div className="container">
        <Slider {...settings}>
          {companiesData.map((ele) => (
            <div className=" flex text-center space-x-3" key={ele.id}>
              <span className=" inline-block mt-2">{ele.icon}</span>
              <h1 className=" inline-block text-2xl font-bold">{ele.name}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;