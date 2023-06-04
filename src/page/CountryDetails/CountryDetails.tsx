import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
interface ISetCountry {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  continents: string[];
  currencies: object;
  fifa: string;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  languages: object;
  name: { common: string; official: string; nativeName: object };
  population: number;
  subregion: string;
}
export const CountryDetails = () => {
  // const countryData = useLoaderData() as unknown as Array<ISetCountry>;
  // const count = countryData[0];
  // const currencies = count.currencies;

  // Object.entries(currencies).map((item, key) => {
  //   // setCurrencies(currencies);
  //   console.log(item);
  // });

  // useEffect(() => {
  //   return;
  // }, [countryData]);

  const { name } = useParams();

  const [country, setCountry] = useState<Array<ISetCountry>>();

  // const countryCurrency = country;
  // const currency = country;
  // Object.entries(currency).map((item, key) => {
  // console.log(item);
  // });

  country?.map((res) => {
    Object.entries(res.name.nativeName).map((resp) => {
      console.log(resp[1].common);
    });
  });

  // const lang = Object.entries(country?.map);

  // const native = setCountry();
  // Object.entries(native).map((res) => {
  //   console.log(res);
  // });

  useEffect(() => {
    const fetchCountryData = async () => {
      const res = await axios(`https://restcountries.com/v3.1/name/${name}`);
      const fetchedCountry = await res.data;

      setCountry(fetchedCountry);
    };

    fetchCountryData();
  }, [name]);

  return (
    <div>
      <div className=" h-fit w-full md:my-[4rem]" id="height">
        <div className="">
          <Link
            to={"/"}
            className="py-1 px-2 flex items-center rounded-[2px] shadow-[0_0_5px_1px] shadow-gray-300 w-fit text-[.8rem]"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back
          </Link>
        </div>
        {country?.map((country, index) => (
          <div
            key={index}
            className="flex items-center justify-between space-y-6 lg:space-y-0 flex-col md:flex-row  h-full w-full mt-[5rem] md:mt-0"
          >
            <div className="w-full md:h-[50vh] md:w-5/12  ">
              <img
                src={country.flags.png}
                alt=""
                className="object-contain w-full h-full rounded-t"
              />
            </div>
            <div className="w-full md:w-6/12 lg:w-5/12">
              <div className="py-3">
                <div>
                  <div className="font-bold text-[1.3rem] mb-[2rem]">
                    {country.name.common}
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="">
                        <span className="text-[.7rem] font-bold">
                          Native Name:{" "}
                        </span>
                        <span className="text-[.7rem] ">
                          {Object.entries(country.name.nativeName).map(
                            (resp, idx) => (
                              <span key={idx}>
                                <span>
                                  {resp[1].common}

                                  {/* {resp[1].common && resp[1].common.join("")} */}
                                </span>
                              </span>
                            )
                          )}
                        </span>
                      </div>
                      <div className="">
                        <span className="text-[.7rem] font-bold">
                          Population:{" "}
                        </span>
                        <span className="text-[.7rem] ">
                          {country.population.toLocaleString()}
                        </span>
                      </div>
                      <div className="">
                        <span className="text-[.7rem] font-bold">Region: </span>
                        <span className="text-[.7rem] ">
                          {country.continents}
                        </span>
                      </div>
                      <div className="">
                        <span className="text-[.7rem] font-bold">
                          Sub Region:{" "}
                        </span>
                        <span className="text-[.7rem] ">
                          {country.subregion}
                        </span>
                      </div>
                      <div className="">
                        <span className="text-[.7rem] font-bold">
                          Capital:{" "}
                        </span>
                        <span className="text-[.7rem] ">{country.capital}</span>
                      </div>
                    </div>

                    <div>
                      <div className="">
                        <span className="text-[.7rem] font-bold">
                          Currencies:{" "}
                        </span>
                        <span className="text-[.7rem] ">
                          {Object.entries(country.currencies).map(
                            (resp, idx) => (
                              <span key={idx}>
                                <span>{resp[1].name}</span>
                              </span>
                            )
                          )}
                        </span>
                      </div>
                      <div className="">
                        <span className="text-[.7rem] font-bold">
                          Languages:{" "}
                        </span>
                        <span className="text-[.7rem] ">
                          {Object.entries(country.languages).map(
                            (resp, idx) => (
                              <span key={idx}>
                                <span>{resp[1].toLocaleString()}</span>
                              </span>
                            )
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className=" items-center space-y-5">
                <div className="text-[.7rem] font-bold">Border Countries: </div>
                <div className="flex items-center  gap-4 flex-wrap">
                  {country.borders.map((border, idx) => (
                    <div key={idx}>
                      <div className=" flex-[1_1_50%  ] text-[.7rem] shadow-[0_0_5px_1px] shadow-gray-300 leading-[.7rem] p-1">
                        {border}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// {
//   countryData.map((country, index) => (
//     <div
//       key={index}
//       className="flex items-center justify-between space-y-6 lg:space-y-0 flex-col md:flex-row  h-full w-full mt-[5rem] md:mt-0"
//     >
//       <div className="w-full md:h-[50vh] md:w-1/2  ">
//         <img
//           src={country.flags.png}
//           alt=""
//           className="object-contain w-full h-full rounded-t"
//         />
//       </div>
//       <div className="w-full md:w-5/12 lg:w-4/12">
//         <div className="py-3">
//           <div>
//             <div className="font-bold text-[1.3rem] mb-[2rem]">
//               {country.name.common}
//             </div>
//             <div className="flex items-start justify-between">
//               <div>
//                 <div className="">
//                   <span className="text-[.7rem] font-bold">Native Name: </span>
//                   <span className="text-[.7rem] ">
//                     {/* {country.name.nativeName.eng.official} */}
//                   </span>
//                 </div>
//                 <div className="">
//                   <span className="text-[.7rem] font-bold">Population: </span>
//                   <span className="text-[.7rem] ">
//                     {country.population.toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="">
//                   <span className="text-[.7rem] font-bold">Region: </span>
//                   <span className="text-[.7rem] ">{country.continents}</span>
//                 </div>
//                 <div className="">
//                   <span className="text-[.7rem] font-bold">Sub Region: </span>
//                   <span className="text-[.7rem] ">{country.subregion}</span>
//                 </div>
//                 <div className="">
//                   <span className="text-[.7rem] font-bold">Capital: </span>
//                   <span className="text-[.7rem] ">{country.capital}</span>
//                 </div>
//               </div>
//               <div>
//                 <div className="">
//                   <span className="text-[.7rem] font-bold">Languages: </span>
//                   <span className="text-[.7rem] ">Coming soon</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div></div>
//         </div>
//         <div className="flex items-center space-x-4 ">
//           <span className="text-[.7rem] font-bold">Border Countries: </span>
//         </div>
//       </div>
//     </div>
//   ));
// }
