import { Header } from "./components";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CountryDetails, HomePage } from "./page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<HomePage />} index />
      <Route element={<CountryDetails />} path="/country/:name" />
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
