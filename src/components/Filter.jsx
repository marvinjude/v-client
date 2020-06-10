import React from "react";
import countriesData from "../utils/countriesData";
import CircularSpinner from "./CircularSpinner";

function Filter({
  filter: { id, colors, countries, start_year, end_year, gender },
  loading,
  selected,
  clickHandler,
}) {
  const handleKeyPress = (id) => (event) => {
    if (event.key === "Enter") clickHandler(id);
  };
  return (
    <div
      tabIndex={1}
      className={`p-5 bg-white cursor-pointer py-10 bg-white border-b`}
      onClick={() => clickHandler(id)}
      onKeyPress={handleKeyPress(id)}
    >
      <div className="flex justify-between mb-3 text-xl flex items-center font-bold">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          {start_year} - {end_year}
          {gender && (
            <span className="uppercase text-sm ml-2 text-gray-600">
              • {gender}
            </span>
          )}
        </div>
        <div>
          {loading && <CircularSpinner />}
          {!loading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-current text-green-500 "
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              {selected && <circle cx="12" cy="12" r="5" fill="currentColor" />}
            </svg>
          )}
        </div>
      </div>
      {countries.length > 0 && (
        <h1 className="font-bold text-xs text-gray-700">COUNTRIES</h1>
      )}
      <div className="grid mt-3 grid-rows-flow grid-cols-3 grid-gap-1">
        {countries.map((country) => (
          <div
            key={country}
            className="p-1 px-1 border rounded-full text-center m-1 truncate no-underline"
            title={country}
          >
            {(countriesData[country] && countriesData[country].emoji) || ""}{" "}
            {country}
          </div>
        ))}
      </div>
      {colors.length > 0 && (
        <h1 className="font-bold text-xs mt-4 text-gray-700">COLORS</h1>
      )}
      <div className="grid mt-3 grid-rows-flow row-gap-2 grid-cols-6 gap-1">
        {colors.map((color, i) => (
          <svg
            key={`${id}-${color}-${i}`}
            width="37"
            height="28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-gray-500"
          >
            <path
              d="M36.356 7.514c-1.024-.741-3.82.506-4.548 1.154a61.768 61.768 0 00-.802-1.886c-1.5-3.362-2.772-5.31-3.889-5.955a.726.726 0 00-.138-.063C26.883.734 24.562 0 18.5 0c-6.062 0-8.383.733-8.479.764a.726.726 0 00-.138.063c-1.117.645-2.389 2.593-3.889 5.955-.293.658-.564 1.3-.802 1.886C4.464 8.02 1.668 6.773.644 7.514c-1.057.765-.634 3.172 0 3.825.395.408 1.48.532 2.624.427a6.495 6.495 0 00-.6 1.588c1.802.468 6.039.447 5.405 2.346-.926 2.777-3.778 2.392-5.535 1.158l.328 7.83C2.866 26.516 3.939 28 5.263 28h1.442c1.323 0 2.397-1.483 2.397-3.313l-.047-.702h18.89l-.047.702c0 1.83 1.074 3.313 2.398 3.313h1.441c1.324 0 2.397-1.483 2.397-3.313l.328-7.83c-1.757 1.235-4.609 1.62-5.535-1.157-.633-1.899 3.603-1.878 5.406-2.345a6.493 6.493 0 00-.6-1.589c1.143.105 2.228-.019 2.623-.427.634-.653 1.057-3.06 0-3.825zM23.113 20.306h-9.226l-.958-4.83H24.07l-.958 4.83zM6.859 9.544c1.148-2.775 2.614-5.738 3.639-6.42.43-.118 2.774-.68 8.002-.68 5.234 0 7.578.564 8.002.679 1.023.682 2.49 3.645 3.638 6.42H6.86z"
              fill={color}
            />
            🇦
          </svg>
        ))}
      </div>
    </div>
  );
}

export default Filter;
