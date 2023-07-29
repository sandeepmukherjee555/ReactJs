import { useState } from 'react';
import stateObj from '../utils/state-city.json';
import useCities from './useCities';

const searchRestaurants = (searchText, listOfRestaurants) => {
  return listOfRestaurants.filter((res) =>
    res?.data?.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
  /* comparing multiple values*/
  // return data.filter(
  //   (res) =>
  //     res.stars > searchText ||
  //     res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  // );
  // return data.filter((res) => res.stars > searchText);
};
const SearchBar = ({ listOfRestaurants, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState('');
  const [stateName, setStateName] = useState('');
  const [cityName, setCityName] = useState('');

  const cityList = useCities(stateName);
  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault(); //it should be always available when we are doing on Sumbit on forms
          const filteredRestaurants = searchRestaurants(
            searchText,
            listOfRestaurants
          );

          setFilteredRestaurants(filteredRestaurants);
        }}
      >
        <input
          id="restaurant"
          placeholder="Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <select
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
        >
          {Object.keys(stateObj).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        {/* <select value={cityName} onChange={(e) => setCityName(e.target.value)}>
          {cityList.map((city) => (
            <option>{city}</option>
          ))}
        </select> */}
        <select value={cityName} onChange={(e) => setCityName(e.target.value)}>
          {cityList?.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
