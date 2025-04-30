import React, { useEffect } from "react";
import Rechart from "../components/mybookings/rechart";
import Appointments from "../components/mybookings/appointments";
import { useLoaderData } from "react-router";
import { ToastContainer } from "react-toastify";
import EmptyMessage from "../components/mybookings/emptyMessage";

function Mybookings() {
  const data = useLoaderData();

  const localStorageData =
    JSON.parse(localStorage.getItem("appointments")) || [];
  const convertedlocalStorageData = localStorageData.map((id) => parseInt(id));
  const appointedDoctors = data.filter((doctor) =>
    convertedlocalStorageData.includes(doctor.id)
  );

  if (appointedDoctors.length < 1) return <EmptyMessage></EmptyMessage>;
  return (
    <div>
      <Rechart appointedDoctors={appointedDoctors}></Rechart>
      <Appointments appointedDoctors={appointedDoctors}></Appointments>
      <ToastContainer />
    </div>
  );
}

export default Mybookings;
