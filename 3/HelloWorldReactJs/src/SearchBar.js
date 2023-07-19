import { useState } from 'react';
import data from './data.json';

const searchRestaurants = (searchText) => {
  return data.filter((res) =>
    res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
  /* comparing multiple values*/
  // return data.filter(
  //   (res) =>
  //     res.stars > searchText ||
  //     res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  // );
  // return data.filter((res) => res.stars > searchText);
};
const SearchBar = ({ setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState();
  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault(); //it should be always available when we are doing on Sumbit on forms
          const filteredRestaurants = searchRestaurants(searchText);
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
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
