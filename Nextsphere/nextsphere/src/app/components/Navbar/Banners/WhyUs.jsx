import React from "react";

const whyusImage = "/assets/whyus.jpg";

const aboutData = [
  {
    id: 1,
    num: "7+",
    title: "Years of Expertise",
    description:
      "With over 7 years of industry experience, we bring unparalleled knowledge to every project.",
  },
  {
    id: 2,
    num: "54",
    title: "Satisfied Clients",
    description:
      "Our 54 happy clients are a testament to our commitment to excellence and customer satisfaction.",
  },
  {
    id: 3,
    num: "29+",
    title: "Trusted Partners",
    description:
      "We’ve built strong relationships with 29+ business partners to deliver exceptional value.",
  },
];

const WhyUs = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-end text-center lg:text-start"
      style={{
        backgroundImage: `url(${whyusImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%", // Adjusted size
        backgroundPosition: "center center",
      }}
    >
      <h1
        data-aos="fade-up"
        className="text-6xl font-bold text-black w-full lg:w-1/3 py-10"
      >
        Why Us?
      </h1>

      {aboutData.map((ele) => (
        <div
          data-aos="fade-up"
          className="w-full lg:w-1/3 space-y-5 pr-5 pb-14 lg:pb-6"
          key={ele.id}
        >
          <div className="flex justify-center lg:items-center gap-5 w-full lg:w-2/4">
            <span className="text-6xl font-bold text-black">{ele.num}</span>
            <h3 className="text-2xl font-bold text-black">{ele.title}</h3>
          </div>
          <div>
            <p className="text-black">{ele.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
