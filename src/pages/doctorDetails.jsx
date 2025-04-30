import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { addToLocalStorage } from "../utility/localStorage";
import { ToastContainer } from "react-toastify";
import ErrorDoctor from "../components/home/body/doctors/errorDoctor";

function DoctorDetails() {
  const { doctorsID } = useParams();
  const doctors = useLoaderData();
  const doctor = doctors.find((doctor) => doctor.id === parseInt(doctorsID));

  if (!doctor) {
    return <ErrorDoctor></ErrorDoctor>;
  }

  const {
    name,
    image,
    education,
    registrationNumber,
    fee,
    profileDetails,
    medicalName,
    availability,
  } = doctor;

  const navigate = useNavigate();

  const handleBookAppointment = (docId, name) => {
    const navigateCondition = addToLocalStorage(docId, name);

    if (navigateCondition) {
      setTimeout(() => {
        navigate("/mybookings");
      }, 2000);
    }
  };

  return (
    <div className="font-main">
      <div className="text-center py-10 my-12 bg-white w-5/6 mx-auto rounded-2xl">
        <h1 className="text-4xl font-bold pb-4">Doctor’s Profile Details</h1>
        <p className="text-lg text-mainText/70 mx-25">{profileDetails}</p>
      </div>

      <div className="pb-10 py-10 my-12 bg-white w-5/6 mx-auto rounded-2xl flex items-center justify-center">
        <div className="w-1/3 px-8 ">
          <img
            className="mx-auto h-85 object-cover rounded-2xl"
            src={image}
            alt=""
          />
        </div>

        <div className="w-2/3 pr-15">
          <h5 className="text-3xl font-bold mb-2">{name}</h5>
          <p className="text-mainText/60 pb-1 mb-4 font-medium">{education}</p>

          <div className="border-b-2 border-dashed border-gray-200 pb-4 text-xl ">
            <p className="text-mainText/60 pb-1">Working at</p>
            <p className="text-mainText font-bold">{medicalName}</p>
          </div>

          <p className="text-mainText/70 py-3 mb-4 font-medium border-b-2 border-dashed border-gray-200 text-md">
            {" "}
            <span className="mr-2 border-1 rounded-full px-1 text-xs">R</span>
            Reg No: {registrationNumber}
          </p>

          <div className="flex mb-3">
            <p className="font-bold mr-5">Availability</p>
            <p>
              {availability.map((day) => (
                <span className="bg-warning/10 border-2 border-warning/20 rounded-full text-sm text-warning px-3 py-1 mr-3 font-semibold">
                  {day}
                </span>
              ))}
            </p>
          </div>

          <p className="text-blue">
            <span className="text-black font-bold mr-3">Consultation Fee:</span>{" "}
            <span className="text-blue font-semibold mr-1">{fee}</span>{" "}
            <span className="text-mainText/40 font-medium">(inc. Vat)</span> Per
            Consultation
          </p>
        </div>
      </div>

      <div className="text-center py-10 px-10 my-12 bg-white w-5/6 mx-auto rounded-2xl ">
        <h1 className="text-2xl font-bold pb-5 border-b-2 border-dashed border-gray-200">
          Book an Appointment
        </h1>

        <div className="text-xl font-bold py-5 border-b-2 border-gray-200 flex justify-between mb-6">
          <p>Availability</p>
          <p className="bg-green/10 border-2 border-green/20 text-green rounded-full text-sm px-3 py-1 mr-3 font-semibold">
            Available Today
          </p>
        </div>

        <div className="bg-warning/10 border-2 border-warning/20 rounded-full text-warning px-3 py-1 mr-3 font-semibold flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>

          <span className="ml-2">
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </span>
        </div>

        <button
          className="btn bg-blue w-full text-white rounded-4xl px-7 py-6 mt-10 text-xl font-medium"
          onClick={() => {
            handleBookAppointment(doctorsID, name);
          }}
        >
          Book Appointment Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DoctorDetails;
