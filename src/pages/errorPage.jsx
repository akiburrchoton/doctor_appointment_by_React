import React from "react";
import { Link } from "react-router";
import Navbar from "../components/home/header/navbar";

function ErrorPage() {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="flex flex-col items-center justify-center w-5/6 min-h-screen
 mx-auto py-20 font-main"
      >
        <div className="text-center pb-8">
          <h1 className="text-5xl font-bold pb-4 text-red">
            404 - Page Not Found!
          </h1>
          <p className="text-lg text-mainText/70 mx-25">
            Ooopppss!!! The page you're looking for doesn't exist!
          </p>

          <Link
            to="/"
            className="btn bg-blue w-1/3 text-white rounded-4xl px-7 py-6 mt-10 text-xl font-medium"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
