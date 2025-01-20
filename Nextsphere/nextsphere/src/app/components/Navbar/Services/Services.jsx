import React from "react";
import ServiceCard from "./ServiceCard";
import { MdOutlineWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

const serviceData = [
  {
    id: 1,
    icon: <MdOutlineWeb size={45} />,
    title: "Web Design",
    color: "bg-tertiary",
    description:
      "Your website is more than just a digital presence—it's the foundation of your brand in the online world. We specialize in creating visually stunning, user-friendly, and high-performing websites that captivate your audience and drive results.",
  },
  {
    id: 2,
    icon: <FaCode size={45} />,
    title: "Development",
    color: "bg-secondary",
    description:
      "Bring your ideas to life with our cutting-edge development services. From web applications to scalable platforms, we ensure your solutions are built to perform and grow.",
  },
  {
    id: 3,
    icon: <GiShoppingBag size={45} />,
    title: "Ecommerce",
    color: "bg-primary",
    description:
      "Transform your business with a seamless ecommerce experience. We create platforms that are not just functional but also enhance customer satisfaction and drive sales.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen container flex flex-col justify-center items-center gap-10 py-10">
      <h1
        data-aos="fade-up"
        className="text-3xl lg:text-5xl font-bold text-center w-full lg:w-3/4"
      >
        Streamline your business management with our services
      </h1>
      <p
        data-aos="fade-up"
        className="text-sm lg:text-base w-full lg:w-3/4 text-center"
      >
        Whether you need a captivating website, a robust marketing campaign, or
        comprehensive brand development, we’re here to bring your vision to
        life. With a client-focused approach, we prioritize your success by
        delivering solutions that are not only effective but also sustainable.
      </p>

      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {serviceData.map((ele) => (
          <ServiceCard
            key={ele.id}
            icon={ele.icon}
            title={ele.title}
            color={ele.color}
            description={ele.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
