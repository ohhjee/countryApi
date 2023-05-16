import { useState } from "react";

import { Header } from "./components";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CountryDetails, HomePage } from "./page";
import { countryLoader } from "./helper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<HomePage />} index />
      <Route element={<CountryDetails />} loader={countryLoader} path=":name" />
    </Route>
  )
);

function App() {
  return (
    <>
      <div className=" dark:text-white">
        <Header />

        <div className="container mx-auto my-[1rem] px-[2rem] ">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
