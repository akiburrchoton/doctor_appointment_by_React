import React from "react";
import Doctor from "./doctor";
import { useEffect } from "react";
import { useState } from "react";

function Doctors({ doctors }) {
  const [displayDoctors, setdisplayDoctors] = useState([]);

  useEffect(() => {
    setdisplayDoctors(doctors.slice(0, 6));
  }, []);

  const handleViewAll = () => {
    setdisplayDoctors(doctors);
  };
  return (
    <div className="flex flex-col items-center w-5/6 mx-auto py-20">
      <div className="text-center pb-8">
        <h1 className="text-5xl font-bold pb-4">Our Best Doctors</h1>
        <p className="text-lg text-mainText/70 mx-25">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 font-main pb-10">
        {
          /* CARDS  */
          displayDoctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))
        }
      </div>

      <a
        onClick={handleViewAll}
        className="btn bg-blue text-white rounded-4xl px-7 py-7 text-xl font-medium"
      >
        View All Doctors
      </a>
    </div>
  );
}

export default Doctors;
