import React from "react";
import { Link } from "react-router";

function EmptyMessage() {
  return (
    <div className="flex flex-col items-center w-5/6 mx-auto py-20 font-main">
      <div className="text-center pb-8">
        <h1 className="text-5xl font-bold pb-4">
          You have no appointment today!
        </h1>
        <p className="text-lg text-mainText/70 mx-25">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>

        <Link
          to="/"
          className="btn bg-blue w-1/3 text-white rounded-4xl px-7 py-6 mt-10 text-xl font-medium"
        >
          Book Appointment Now
        </Link>
      </div>
    </div>
  );
}
export default EmptyMessage;
