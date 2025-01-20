import React from "react";
import Image from "next/image";
import WebCard from "./WebCard";
import DevCard from "./DevCard";


const Projects = () => {
    const img1 = '/assets/Webdesign.jpg';
const img2 = '/assets/webdev.jpg';
const img3 = '/assets/ecommerce.jpg';
  return (
    <div className="min-h-screen container flex flex-col items-center justify-center mt-16 mb-8">
      <h1
        data-aos="fade-up"
        className="text-4xl lg:text-5xl font-bold text-center w-full lg:w-3/4"
      >
        See Our Projects
      </h1>
      <p
        data-aos="fade-up"
        className="text-sm lg:text-base w-full lg:w-3/4 text-center mt-5"
      >
        At NextSphere, we are passionate about delivering innovative, custom-tailored solutions that drive growth and success for our clients. With a diverse portfolio that spans multiple industries, our projects are designed to meet the specific needs of each client, ensuring a seamless user experience and impressive results. Here’s a look at some of our standout work.
      </p>

      <div className="py-14">
        <WebCard
          project="Web Design"
          img={<Image src={img1} alt="Fresh Bites Café" width={500} height={300} />}
          title="Fresh Bites Café"
          description="We redesigned Fresh Bites Café's website to enhance customer engagement and streamline the online ordering experience. The new site features a modern, responsive design with a seamless online ordering system that boosted sales and improved customer satisfaction."
        />
        <DevCard
          project="Development"
          img={<Image src={img2} alt="TechHub Solutions" width={500} height={300} />}
          title="TechHub Solutions"
          description="For TechHub Solutions, we developed a sleek, corporate website to showcase their technology consulting services. The site features service pages, client case studies, and a dynamic team bio section, helping them build a stronger online presence."
        />
        <WebCard
          project="Ecommerce"
          img={<Image src={img3} alt="Sunny Days Travel" width={500} height={300} />}
          title="Sunny Days Travel"
          description="We created an easy-to-navigate eCommerce website for Sunny Days Travel. The platform includes a dynamic vacation package booking system, real-time availability checks, and multi-language support, making it easier for international customers to plan their vacations."
        />
      </div>

      <button className="bg-primary px-6 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0)] rounded-md cursor-pointer">
        See All Projects
      </button>
    </div>
  );
};

export default Projects;
