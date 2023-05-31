import { MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useMemo, useState } from "react";

export const Header = () => {
  // TODO:: ADD THEME TO PAGE SIG LOCALSTORAGE
  const [theme, setTheme] = useState<null | string>(null);
  // const darkQuery = window.matchMedia("(prefers-color-scheme: dark )");
  // console.log(darkQuery);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    // // const htmlClasses = document.querySelector("html").classList;
    // if (theme === "dark") {
    //   document.documentElement.classList.add("dark");
    //   localStorage.setItem("theme", "dark");
    //   console.log("theme is dark");
    // } else {
    //   document.documentElement.classList.remove("dark");
    //   localStorage.setItem("theme", "light");
    //   console.log("theme is white");
    // }
    // if (localStorage.getItem("theme") === "dark") {
    //   document.documentElement.classList.add("dark");
    // } else if (localStorage.getItem("theme") === "light") {
    //   document.documentElement.classList.remove("dark");
    // }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("theme is dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("theme is white");
    }
    // handleClick();
  }, [theme]);

  return (
    <div className="py-[1rem] shadow-[0px_0px_10px_5px] shadow-gray-300 dark:shadow-gray-700">
      <div className="container mx-auto w-full sm:px-2 lg:px-0">
        <div className="flex justify-between items-center px-[1rem] md:px-0">
          <div className="font-bold">Where in the world?</div>

          <button
            onClick={handleClick}
            className="flex items-center font-bold space-x-2 bg-gray-400 shadow-gray-200 shadow-[0_0_5px_2px] p-2 rounded "
          >
            <MoonIcon className="dark:text-white  h-4 w-4" />
            <span className="text-[.8rem]">Dark mood</span>
          </button>
        </div>
      </div>
    </div>
  );
};
