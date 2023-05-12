import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesList({eachCountry}) {
  return (
    <div>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt='flag'/>
        <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
    </div>
  )
}
