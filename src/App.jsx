import "./App.css";
/* import countries from "./countries.json"; */
import { useState } from "react";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [countriesData, setCountriesData] = useState([]);

//using axios

const fetchData = async () => {
  try {
    const response = await axios.get ("https://ih-countries-api.herokuapp.com/countries");
    console.log(response.status);
    if(response.status ===200) {
      setCountriesData(response.data);
    }
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchData();
}, []); 

  //using Variable with fetch and allows useEffect to use the variable more
/*   const fetchData = async () => {
    try {
      const response = await fetch ("https://ih-countries-api.herokuapp.com/countries");

      const parsed = await response.json();
      setCountriesData(parsed);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); */

  //Elisa and my answer
 /*  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //sort the API in alphabetically order
        const sortedCountries = data.sort((a, b) => {
          if (a.name.common < b.name.common) return -1;
          if (a.name.common > b.name.common) return 1;
          return 0;
        });
        setCountriesData(sortedCountries);
      })
      .catch((err) => console.log(err));
  }, []); */

  return (
    <div className="App">
      <Navbar />

      {countriesData.map((eachCountry) => {
        return (
          <div>
            <CountriesList eachCountry={eachCountry} />
          </div>
        );
      })}

      <Routes>
        <Route
          path="/:id"
          element={<CountryDetails countriesData={countriesData} />}
        />
      </Routes>
    </div>
  );
}
export default App;
