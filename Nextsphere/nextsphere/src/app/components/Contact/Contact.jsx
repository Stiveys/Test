import React from "react";

const Contact = () => {
  return (
    <div className="bg-secondary">
      <div className="min-h-screen container flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div data-aos="fade-up" className=" w-full lg:w-2/4">
          <h1 className=" text-4xl lg:text-6xl font-semibold leading-tight">
            Let's start your journey
          </h1>
          <div className=" border-b-2 border-black pb-3 mt-10">
            <input
              type="text"
              placeholder="Name"
              className=" text-2xl bg-transparent border-none outline-none"
            />
          </div>
          <div className=" border-b-2 border-black pb-3 mt-10">
            <input
              type="email"
              placeholder="Email"
              className=" text-2xl bg-transparent border-none outline-none"
            />
          </div>
          <div className=" border-b-2 border-black pb-3 mt-10">
            <input
              type="text"
              placeholder="Message"
              className=" text-2xl bg-transparent border-none outline-none"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className=" w-full lg:w-1/3 space-y-8 mt-14 lg:mt-0"
        >
          <p className=" text-xl lg:text-2xl font-medium">
          We drive the process to ensure your business reaches its full potential for growth
          </p>
          <button className=" bg-tertiary px-6 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0)] rounded-md cursor-pointer">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;