import countryFlagEmoji from "country-flag-emoji";

const countriesData = countryFlagEmoji.list.reduce((accumulator, current) => {
  return { ...accumulator, [current.name]: current };
}, {});

export default countriesData;
