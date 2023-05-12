import "./App.css";
/* import countries from "./countries.json"; */
import { useState } from "react";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";


function App() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {

      fetch("https://ih-countries-api.herokuapp.com/countries")
    .then((response) => { 
    return response.json();
  })
  .then((data) => {
    setCountriesData (data)
   
  }).catch((err) => console.log(err));
  }, [])
 

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
