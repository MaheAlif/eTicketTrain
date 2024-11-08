import React, { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

const BuyTicket = () => {
  const data = useLoaderData();
  console.log("Train data : \n", data);

  //   Filterring out the data from params passed from Home page
  const [searchParams] = useSearchParams();
  const fromCity1 = searchParams.get("fromCity");
  const toCity1 = searchParams.get("toCity");
  const dateOfJourney1 = searchParams.get("doj");

  // State to store filtered trains based on search
  const [filteredTrains, setFilteredTrains] = useState([]);

  // Ticket buy handling function
  const handleTicketBuy2 = (event) => {
    event.preventDefault();
    const form = event.target;
    const fromCity = form.fromCity.value;
    const toCity = form.toCity.value;

    const fromCity2 =  fromCity.toLowerCase() || fromCity1.toLowerCase() 
    const toCity2 =  toCity.toLowerCase() || toCity1.toLowerCase() 

    // Filter trains based on fromCity and toCity
    const matchingTrains = data.filter((train) => {
      const fromIndex = train.stations.findIndex(
        (station) => station.name.toLowerCase() === fromCity2.toLowerCase()
      );
      const toIndex = train.stations.findIndex(
        (station) => station.name.toLowerCase() === toCity2.toLowerCase()
      );

      // Ensure both cities exist in the train's station list in the correct order
      return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
    });

    // Update the filteredTrains state
    setFilteredTrains(matchingTrains);
  };

  return (
    <>
      <section className="min-h-screen flex flex-col">
        <form
          onSubmit={handleTicketBuy2}
          className="flex flex-col lg:flex-row gap-2 p-2 lg:p-5 bg-slate-400"
        >
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
            <button className="bg-green-400 px-3 py-3 text-xl rounded-lg shadow-lg text-white hover:bg-green-800 ">
              Search Trains
            </button>
          </div>
        </form>

        {/* Show train */}
        <div className="p-5 border-2 border-purple-500 ">
          <h2 className="text-xl font-semibold text-black">
            Available Trains:
          </h2>
          <div className="mt-4">
            {filteredTrains.length > 0 ? (
              filteredTrains.map((train, index) => (
                <div
                  key={index}
                  className="p-4 mb-2 text-black border border-purple-500 rounded-lg"
                >
                  {train.trainName}
                </div>
              ))
            ) : (
              <p className="text-black">No matching trains found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyTicket;
