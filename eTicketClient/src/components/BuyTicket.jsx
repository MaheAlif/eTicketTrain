import React from 'react';

const BuyTicket = () => {

    
  return (
    <>
      <section className='min-h-screen'>
      <form className="flex flex-col lg:flex-row gap-2 p-2 lg:p-5 bg-slate-400">
              {/* from-city */}
              <div className="form-control animate__animated animate__fadeInLeft animate__faster">
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
              <div className="form-control animate__animated animate__fadeInLeft animate__fast">
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
              <div className="form-control animate__animated animate__fadeInLeft animate__delay-1s">
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

              <div className="flex items-center justify-center mt-8 animate__animated animate__fadeInLeft animate__delay-2s">
                <button className="bg-green-400 px-3 py-3 text-xl rounded-lg shadow-lg text-white hover:bg-green-800 ">Search Trains</button>
              </div>
              
            </form>
      </section>
    </>
  );
};

export default BuyTicket;