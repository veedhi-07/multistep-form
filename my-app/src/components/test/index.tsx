// import {
//   CountrySelect,
//   StateSelect,
//   CitySelect,
// } from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";

// export default function Test() {
//   return (
//     <div>
//       {/* <CountrySelect placeHolder="Select Country" /> */}
//       <StateSelect placeHolder="Select State" countryid={2} />
//       {/* <CitySelect placeHolder="Select City" stateid={2} countryid={2} /> */}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

// export default function Test() {
//   const [country, setCountry] = useState("");
//   const [region, setRegion] = useState("");

//   return (
//     <div>
//       <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
//       <RegionDropdown
//         country={country}
//         value={region}
//         onChange={(val) => setRegion(val)}
//       />
//     </div>
//   );
// }
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useState } from "react";

export default function Test() {
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [cityId, setCityId] = useState(0);
  return (
    <>
      <CountrySelect
        placeHolder="Select Country"
        inputClassName="..."
        onChange={(country) => {
          console.log(country);
          if ("id" in country) setCountryId(country.id);
        }}
      />

      <StateSelect
        placeHolder="Select State"
        // inputClassName="..."
        countryid={countryId}
        onChange={(state) => {
          console.log(state);
          if ("id" in state) setStateId(state.id);
        }}
      />

      <CitySelect
        placeHolder="Select City"
        inputClassName="..."
        countryid={countryId}
        stateid={stateId}
        onChange={(city) => {
          console.log(city);
          if ("id" in city) setCityId(city.id);
        }}
      />
    </>
  );
}
