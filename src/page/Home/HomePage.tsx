import { useEffect, useState } from "react";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";
interface CountryId {
  id: number;
  name: string;
  population: number;
  continents: string;
  capital: string;
  common: string;
}

export const HomePage: React.FC = () => {
  const [country, setCountry] = useState<Array<CountryId>>([]);

  const [search, setSearch] = useState<string | number>("");
  const HandleSearch = async () => {
    try {
      const { data } = await axios(
        `https://restcountries.com/v3.1/name/${search}`
      );
      setCountry(data);
    } catch (error) {
      return "reer";
    }
  };
  const HandleSearchForm = (e) => {
    e.preventDefault();
    HandleSearch();
  };
  const HandleFilter = async (region) => {
    try {
      const { data } = await axios(
        `https://restcountries.com/v3.1/region/${region}`
      );
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  };
  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "North America",
    },
    {
      name: "South America",
    },
    {
      name: "Antarctica",
    },
  ];
  const HandleFormFiter = (e) => {
    e.preventDefault();
    HandleFilter();
  };

  const fetchCountry = async () => {
    const { data } = await axios.get(" https://restcountries.com/v3.1/all ");
    setCountry(data);
  };
  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <>
      <div>
        <div>
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 justify-between items-center my-[2rem] px-2 md:px-0">
            <div className="w-full sm:w-4/12">
              <form className="" onSubmit={HandleSearchForm}>
                <div className="relative h-full">
                  <input
                    autoComplete=""
                    type="text"
                    name="search"
                    onChange={(event) => setSearch(event.target.value)}
                    className="w-full border shadow-[0_0_5px_2px] shadow-gray-300 pl-[1.5rem] focus-within:outline-none px-2 text-[.8rem] h-[5vh] "
                    value={search}
                    placeholder="search for a country"
                  />
                  <div className="absolute top-0 h-full flex items-center left-1">
                    <MagnifyingGlassIcon className="h-4 w-4" />
                  </div>
                </div>
              </form>
            </div>
            <div className="w-full sm:w-4/12">
              <form onChange={HandleFormFiter}>
                <select
                  name=""
                  id=""
                  onChange={(e) => HandleFilter(e.target.value)}
                  className="w-full shadow-[0_0_5px_2px] shadow-gray-300 h-[5vh] bg-white px-2 focus-within:outline-none"
                >
                  {regions.map((region, index) => (
                    <option value="" key={index} value={region.name}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </form>
            </div>
          </div>
        </div>

        <div>
          <>
            <div className="flex gap-[2rem] flex-wrap ">
              {country.map((res: CountryId, index) => (
                <div
                  key={index}
                  className="  flex-[1_1_50%]  xs:flex-[1_1_30%] lg:flex-[1_1_20%] shadow-gray-400 shadow-[0_0_5px_2px] gap-[2rem] rounded"
                >
                  <Link to={res.name.common}>
                    <div>
                      <div className="h-[20vh] ">
                        <img
                          src={res.flags.png}
                          alt=""
                          className="h-full w-full rounded-t"
                        />
                      </div>
                      <div className="p-3">
                        <div className="font-semibold text-[.8rem]">
                          {res.name.common}
                        </div>
                        <div className="">
                          <span className="text-[.7rem] font-bold">
                            Population:{" "}
                          </span>
                          <span className="text-[.7rem] ">
                            {res.population.toLocaleString()}
                          </span>
                        </div>
                        <div className="">
                          <span className="text-[.7rem] font-bold">
                            Region:{" "}
                          </span>
                          <span className="text-[.7rem] ">
                            {res.continents}
                          </span>
                        </div>
                        <div className="">
                          <span className="text-[.7rem] font-bold">
                            Capital:{" "}
                          </span>
                          <span className="text-[.7rem] ">{res.capital}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
    </>
  );
};
