import React from "react";
import SearchBar from "../Components/SearchBar";
import DropDown from "../Components/DropDown";
import Countries from "../Components/Countries";

const HomePage = ({ theWorld, inputedCountry, clickedRegion }) => {
  return (
    <div className="sm:px-20 px-4">
      <div className="flex flex-col sm:flex-row gap-8 justify-between sm:items-center sm:my-[50px] my-6">
        <SearchBar inputedCountry={inputedCountry} />
        <DropDown clickedRegion={clickedRegion} />
      </div>
      <Countries getTheWorld={theWorld} />
    </div>
  );
};

export default HomePage;
