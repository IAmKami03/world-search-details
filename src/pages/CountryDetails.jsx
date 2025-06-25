import React, { useState } from "react";
import EachCountry from "../Components/EachCountry";
import { useLocation, useParams } from "react-router-dom";

import CountriesData from "../data.json";

const CountryDetails = () => {
  const { countryName } = useParams();

  const { state } = useLocation();
  console.log();

  const findCountry =
    state.country ||
    CountriesData.find((country) => {
      return country.name === decodeURIComponent(countryName);
    });
  return (
    <div>
      <EachCountry perCountry={findCountry} />
    </div>
  );
};

export default CountryDetails;
