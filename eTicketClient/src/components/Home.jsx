import { useState, useEffect } from "react";
import trainImage1 from "../assets/train.jpg";
import trainImage2 from "../assets/train2.png";
import trainImage3 from "../assets/train3.png";
import trainImage4 from "../assets/train4.png"
import trainImage5 from "../assets/train5.png"
import trainImage6 from "../assets/train6.png"
import { NavLink } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Use an array of images for easy access
  const slides = [
    { id: 1, src: trainImage1 },
    { id: 2, src: trainImage2 },
    { id: 3, src: trainImage3 },
    { id: 4, src: trainImage4 },
    { id: 5, src: trainImage5 },
    { id: 6, src: trainImage6 },
  ];

  // Automatically transition slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % slides.length) + 1);
    }, 4000);

    return () => clearInterval(interval); // Clean up on unmount
  }, [slides.length]);

  // Ticket buy handling function !
  const handleTicketBuy = (event) => {
    event.preventDefault();
    const form = event.target;
    const fromCity = form.fromCity.value;
    const toCity = form.toCity.value;
    const dateOfJourney = form.doj.value;
    console.log(
      "Form : ",
      fromCity,
      "\nTo :",
      toCity,
      "\nDate of Journey : ",
      dateOfJourney
    );
  };

  return (
    <>
      <section className="m-5 animate__animated animate__zoomIn">
        <div className="hero">
          {/* Carousel */}
          <div className="lg:carousel hidden z-[-10] w-full">
            {slides.map((slide, index) => (
              // Carousel boiler plates
              <div
                key={slide.id}
                id={`slide${slide.id}`}
                className={`carousel-item relative w-full ${
                  currentSlide === slide.id ? "block" : "hidden"
                }`}
              >
                <img
                  src={slide.src}
                  className="w-full"
                  alt={`Slide ${slide.id}`}
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a
                    href={`#slide${
                      ((slide.id - 1 + slides.length - 1) % slides.length) + 1
                    }`}
                    className="btn btn-circle z-10"
                    onClick={() =>
                      setCurrentSlide((prevSlide) =>
                        prevSlide === 1 ? slides.length : prevSlide - 1
                      )
                    }
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${(slide.id % slides.length) + 1}`}
                    className="btn btn-circle"
                    onClick={() =>
                      setCurrentSlide(
                        (prevSlide) => (prevSlide % slides.length) + 1
                      )
                    }
                  >
                    ❯
                  </a>
                </div>
              </div>
              // End of carousel
            ))}
          </div>

          {/* Inside Content */}
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="lg:flex-row flex flex-col text-neutral-content text-center border-green-500 p-5">
            {/* Intro texts ! */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-5 text-xl lg:text-4xl font-bold animate__animated animate__fadeInLeft animate__delay-1s">
                Welcome passenger
              </h1>
              <p className="mb-5 animate__animated animate__fadeInRight animate__delay-2s">
                This is a demo website for e-ticket service of Bangladesh
                Railway.
              </p>
              <NavLink to="/buyTicket" className="animate__animated animate__fadeInUpBig animate__delay-3s p-2 lg:p-5 bg-transparent border-2 border-white hover:bg-green-700 hover:text-white hover:border-purple-400 hover:border-4 hover:text-xl">
                Buy Ticket
              </NavLink>
            </div>

            {/* form */}
            <form onSubmit={handleTicketBuy} className="card-body">
              {/* from-city */}
              <div className="form-control animate__animated animate__fadeInLeft animate__delay-1s">
                <label className="label">
                  <span className="label-text text-white">From city</span>
                </label>
                <input
                  type="text"
                  name="fromCity"
                  placeholder="from"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              {/* to-city */}
              <div className="form-control animate__animated animate__fadeInLeft animate__delay-2s">
                <label className="label">
                  <span className="label-text text-white">To city</span>
                </label>
                <input
                  type="text"
                  name="toCity"
                  placeholder="to"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              {/* Date of journey */}
              <div className="form-control animate__animated animate__fadeInLeft animate__delay-3s">
                <label className="label">
                  <span className="label-text text-white">Date of Journey</span>
                </label>
                <input
                  type="date"
                  name="doj"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form-control mt-6 animate__animated animate__fadeInLeft animate__delay-3s">
                <button className="btn btn-primary">Search Trains</button>
              </div>
              <div className="text-center">
                <p>Havent registered yet? </p>
                <div className="animate__animated animate__swing animate__delay-4s">
                  <NavLink to="/register" className="text-blue-500">
                    Register
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
