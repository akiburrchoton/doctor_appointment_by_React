import App from "../App.jsx";

import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/errorPage.jsx";
import Home from "../pages/home.jsx";
import Mybookings from "../pages/mybookings.jsx";
import DoctorDetails from "../pages/doctorDetails.jsx";
import BlogPage from "../pages/blogPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/data.json"),
        Component: Home,
      },
      {
        path: "/mybookings",
        loader: () => fetch("/data.json"),
        Component: Mybookings,
      },
      {
        path: "/blogs",
        Component: BlogPage,
      },
      {
        path: "/doctorDetails/:doctorsID",
        loader: () =>
          fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
              return data;
            }),
        Component: DoctorDetails,
      },
    ],
  },
]);
