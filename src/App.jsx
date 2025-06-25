import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetails";
import NavBar from "./Components/NavBar";
import { useEffect, useState } from "react";

import CountriesData from "./data.json";

function App() {
  //======declare intial========
  const [allCountries] = useState(CountriesData);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // ========filter countries by search========
  const filterBySearch = (searched) => {
    const searchedCountry = allCountries.filter((country) => {
      return country.name.toLowerCase().includes(searched);
    });
    setFilteredCountries(searchedCountry);
  };

  // ========filter countries by region========
  const filterByRegion = (region) => {
    const selectedRegion = allCountries.filter((eCountry) => {
      return eCountry.region === region;
    });
    setFilteredCountries(selectedRegion);
  };
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                theWorld={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
                inputedCountry={filterBySearch}
                clickedRegion={filterByRegion}
              />
            }
          />
          <Route
            path="/details/:countryName"
            element={<CountryDetails detailsByCountry={allCountries} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
