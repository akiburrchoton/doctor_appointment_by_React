import React from "react";
import Banner from "../components/home/header/banner";
import Counter from "../components/home/body/counter";
import Doctors from "../components/home/body/doctors/doctors";
import { useLoaderData } from "react-router";

function Home() {
  const doctors = useLoaderData();

  return (
    <div>
      <Banner></Banner>

      <Doctors doctors={doctors}></Doctors>

      <Counter></Counter>
    </div>
  );
}

export default Home;
