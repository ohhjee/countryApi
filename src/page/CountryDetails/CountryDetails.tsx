import { useLoaderData, useParams } from "react-router";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
interface CountryId {
  id: number;
  name: string;
  population: number;
  continents: string;
  capital: string;
  common: string;
}
export const CountryDetails = () => {
  const CountryData = useLoaderData<Array<CountryId>>([]);

  return (
    <div>
      <div className=" h-fit w-full md:my-[4rem]" id="height">
        <Link to={"/"}>
          <div className="py-1 px-2 flex items-center rounded-[2px] shadow-[0_0_5px_1px] shadow-gray-300 w-fit text-[.8rem]">
            <ArrowLeftIcon className="h-4 mr-2 w-4" />
            Back
          </div>
        </Link>
        {CountryData.map((res, index) => (
          <div
            key={index}
            className="flex items-center justify-between flex-col md:flex-row  h-full w-full mt-[5rem] md:mt-0"
          >
            <div className="h-[50vh] ">
              <img
                src={res.flags.png}
                alt=""
                className="h-full w-full rounded-t"
              />
            </div>
            <div className="p-3 border h-[40vh]">
              <div>
                <div className="font-bold text-[1.3rem]">{res.name.common}</div>
                <div className="">
                  <span className="text-[.7rem] font-bold">Population: </span>
                  <span className="text-[.7rem] ">
                    {res.population.toLocaleString()}
                  </span>
                </div>
                <div className="">
                  <span className="text-[.7rem] font-bold">Region: </span>
                  <span className="text-[.7rem] ">{res.continents}</span>
                </div>
                <div className="">
                  <span className="text-[.7rem] font-bold">Sub Region: </span>
                  <span className="text-[.7rem] ">{res.subregion}</span>
                </div>
                <div className="">
                  <span className="text-[.7rem] font-bold">Capital: </span>
                  <span className="text-[.7rem] ">{res.capital}</span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
