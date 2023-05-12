import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CountryDetails({ countriesData }) {
  const { id } = useParams('');

  const clickedCountry = countriesData.filter((singleCountry) => {
    return singleCountry.alpha3Code === id;
  })[0];

  /* const borderCode = clickedCountry.borders.map((eachBorder) => {
    return (eachBorder)

  }) */

  const borderInfo = countriesData.filter((eachCountry) => {
    return (clickedCountry.borders.includes(eachCountry.alpha3Code))
  })

  
  return (
    <div className="details">
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${clickedCountry.alpha2Code.toLowerCase()}.png`} alt='flag'/>
    <h1>{clickedCountry.name.common}</h1>
    <p>Capital: {clickedCountry.capital}</p>
    <p>Area: {clickedCountry.area} km 2</p>
    <ul>Borders: 
    {borderInfo.map((eachOne, i) => {
        return (
            <li><Link to={`/${eachOne.alpha3Code}`}>{eachOne.name.common}</Link></li>
        )
    })}    
    </ul>
    </div>
  );
}
