import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetails";
import NavBar from "./Components/NavBar";
import { useEffect, useState } from "react";

function App() {
  //======declare intial========
  const [allCountries, setAllCountries] = useState([]);

  const [filteredCountries, setFilteredCountries] = useState([]);

  // ========fetch all countries data======
  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch("../data.json");
      const convertedData = await fetchData.json();

      console.log(convertedData);

      setAllCountries(convertedData);
    };

    getData();
  }, []);
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
