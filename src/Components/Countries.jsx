import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ getTheWorld }) => {
  return (
    <div className="sm:grid sm:grid-cols-4 gap-[60px] sm:items-start flex flex-col items-center justify-center pb-24">
      {getTheWorld.map((country) => {
        return (
          <Link
            to={`/details/${encodeURIComponent(country.name)}`}
            key={country.name}
            state={{ country }}
            className="bg-elements shadow-md text-start rounded-md sm:w-[275px] w-[275px]"
          >
            <img
              src={country.flags.png}
              alt=""
              className="rounded-t-md w-[275px] h-[183px]"
            />
            <div className="custom-text-color px-[25px] pt-[30px] pb-[40px] flex flex-col gap-[15px] items-start">
              <h3 className="font-semibold text-[18px]">{country.name}</h3>
              <div className="text-[14px] ">
                <p>
                  <b>Population</b>: {country.population.toLocaleString()}
                </p>
                <p>
                  <b>Region:</b> {country.region}
                </p>
                <p>
                  <b>Capital:</b> {country.capital}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Countries;
