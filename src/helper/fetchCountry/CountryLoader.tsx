import axios from "axios";
interface Param {
  params: string;
}
export const countryLoader = async ({ params }) => {
  const { name } = params;

  const res = await axios("https://restcountries.com/v3.1/name/" + name);
  return res.data;
};
