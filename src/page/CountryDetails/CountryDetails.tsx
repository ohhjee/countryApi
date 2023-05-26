import { useLoaderData, useParams } from "react-router";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
interface CountryId {
  name: string;
  population: number;
  continents: string;
  capital: string;
  common: string;
}
export const CountryDetails = () => {
  const CountryData = useLoaderData<CountryId[]>([]);
  const money = CountryData.currencies;
  console.log("countryData: ", CountryData);

  return (
    <div>
      <div className=" h-fit w-full md:my-[4rem]" id="height">
        <Link to={"/"}>
          <div className="py-1 px-2 flex items-center rounded-[2px] shadow-[0_0_5px_1px] shadow-gray-300 w-fit text-[.8rem]">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back
          </div>
        </Link>
        {CountryData.map((res: string[], index: number) => (
          <div
            key={index}
            className="flex items-center justify-between space-y-6 lg:space-y-0 flex-col md:flex-row  h-full w-full mt-[5rem] md:mt-0"
          >
            <div className="w-full md:h-[50vh] md:w-1/2  ">
              <img
                src={res.flags.png}
                alt=""
                className="object-contain w-full h-full rounded-t"
              />
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12">
              <div className="py-3">
                <div>
                  <div className="font-bold text-[1.3rem] mb-[2rem]">
                    {res.name.common}
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="">
                        <span className="text-[.7rem] font-bold">
                          Native Name:{" "}
                        </span>
                        <span className="text-[.7rem] ">
                          {/* {res.name.nativeName.eng.official} */}
                        </span>
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
                        <span className="text-[.7rem] font-bold">Region: </span>
                        <span className="text-[.7rem] ">{res.continents}</span>
                      </div>
                      <div className="">
                        <span className="text-[.7rem] font-bold">
                          Sub Region:{" "}
                        </span>
                        <span className="text-[.7rem] ">{res.subregion}</span>
                      </div>
                      <div className="">
                        <span className="text-[.7rem] font-bold">
                          Capital:{" "}
                        </span>
                        <span className="text-[.7rem] ">{res.capital}</span>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <span className="text-[.7rem] font-bold">
                          Languages:{" "}
                        </span>
                        <span className="text-[.7rem] ">Coming soon</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              {/* <div className="mt-[3rem]">{res.map(res)=>(
                <div>
                  {res}
                </div>
              )}</div> */}

              <div className="flex items-center space-x-4 ">
                <span className="text-[.7rem] font-bold">
                  Border Countries:{" "}
                </span>
                {res.borders.map((border: string[], index: number) => (
                  <div
                    key={index}
                    className="px-2 shadow-gray-300 shadow-[0_0_4px_.5px] text-[.6rem] "
                  >
                    <span>{border}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
