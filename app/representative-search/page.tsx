"use client";
import React, { useState } from "react";
import locationsData from "../../components/common/representativeSearch.json";

const RepresentativeSearch: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = (country: string) => {
    setSelectedCountry(country);
  };

  const filteredCountries = locationsData.locationsData.filter((countryData) =>
    countryData.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <div>
        <div className="flex flex-wrap">
          {filteredCountries.map((countryData, index) => (
            <div key={index}>
              <div>
                <h2
                  className={`cursor-pointer mr-4 my-2 text-2xl font-bold font-nunito ${
                    selectedCountry === countryData.country
                      ? "text-[#F5B418]"
                      : "text-[#114c3a]"
                  }`}
                  onClick={() => handleClick(countryData.country)}
                >
                  {countryData.country}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="flex">
          {filteredCountries.map((countryData, index) => (
            <div key={index}>
              {selectedCountry === countryData.country && (
                <div>
                  {/* Sort locations alphabetically by organizationName */}
                  {countryData.locations
                    .slice() // Create a copy of the array to avoid mutating the original
                    .sort((a, b) =>
                      a.organizationName.localeCompare(b.organizationName)
                    )
                    .map((location, index) => (
                      <div
                        className="my-4 font-nunito text-[#114c3a]"
                        key={index}
                      >
                        <p className="text-lg font-bold">
                          {location.organizationName}
                        </p>
                        <p>Representative: {location.representative}</p>
                        <p>Address: {location.address}</p>
                        <p>Tel: {location.tel}</p>
                        <p>Mobile: {location.mobile}</p>
                        <p>Email: {location.email}</p>
                        <p>Website: {location.website}</p>
                        <p>Timing: {location.Timing}</p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepresentativeSearch;
