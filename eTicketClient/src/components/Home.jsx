import React from "react";
import trainImage from "../assets/train.jpg";

const Home = () => {
  return (
    <>
      <section className="m-5 animate__animated animate__zoomIn">
      <div
        className="hero"
        style={{
          backgroundImage: { trainImage },
        }}
      >
        <img src={trainImage} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-xl lg:text-5xl font-bold animate__animated animate__fadeInLeft animate__delay-1s">Welcome passenger</h1>
            <p className="mb-5 animate__animated animate__fadeInRight animate__delay-2s">
              This is a demo website for e-ticket service of Bangladesh Railway.
            </p>
            <button className=" animate__animated animate__fadeInUpBig animate__delay-3s p-2 lg:p-5 bg-transparent border-2 border-white hover:bg-green-700 hover:text-white hover:border-purple-400 hover:border-4 hover:text-xl">Buy Ticket</button>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Home;
