import React from "react";
import CountUp from "react-countup";

function Counter() {
  return (
    <div className="flex flex-col items-center w-5/6 mx-auto pb-20">
      <div className="text-center pb-8">
        <h1 className="text-5xl font-bold pb-4">
          We Provide Best Medical Services
        </h1>
        <p className="text-lg text-mainText/70 mx-25">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.{" "}
        </p>
      </div>

      {/* CARDS  */}
      <div className="grid grid-cols-4 gap-6 font-main">
        {/* Cards  */}
        <div className="bg-white pl-12 pr-22 py-10 rounded-2xl">
          <img className="pb-6" src="/assets/success-doctor.png" alt="" />
          <h2 className="text-6xl font-bold pb-4">
            <CountUp end={199} enableScrollSpy={true} suffix="+" />
          </h2>
          <p className="text-2xl text-mainText/60 font-semibold">
            Total Doctors
          </p>
        </div>

        {/* Cards  */}
        <div className="bg-white pl-12 pr-22 py-10 rounded-2xl">
          <img className="pb-6" src="/assets/success-review.png" alt="" />
          <h2 className="text-6xl font-bold pb-4">
            {" "}
            <CountUp end={467} enableScrollSpy={true} suffix="+" />
          </h2>
          <p className="text-2xl text-mainText/60 font-semibold">
            Total Reviews
          </p>
        </div>

        {/* Cards  */}
        <div className="bg-white pl-12 pr-22 py-10 rounded-2xl">
          <img className="pb-6" src="/assets/success-patients.png" alt="" />
          <h2 className="text-6xl font-bold pb-4">
            {" "}
            <CountUp end={1900} enableScrollSpy={true} suffix="+" />
          </h2>
          <p className="text-2xl text-mainText/60 font-semibold">Patients</p>
        </div>

        {/* Cards  */}
        <div className="bg-white pl-12 pr-22 py-10 rounded-2xl">
          <img className="pb-6" src="/assets/success-staffs.png" alt="" />
          <h2 className="text-6xl font-bold pb-4">
            {" "}
            <CountUp end={300} enableScrollSpy={true} suffix="+" />
          </h2>
          <p className="text-2xl text-mainText/60 font-semibold">
            Total Stuffs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
