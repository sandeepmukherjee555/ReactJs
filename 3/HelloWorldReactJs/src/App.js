import React, { createElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import CardComponent from './CardComponent';
import data from './data.json';
import { title } from './constants';
import SearchBar from './SearchBar';
import NoResultsComponent from './NoResultsComponent';

//old way
// const CardContainer = () => {
//   const cards = data.map((restaurant) => {
//     return <CardComponent restaurant={restaurant} />;
//   });
//   return cards;
// };

//latest way
const CardContainer = ({ filteredRestaurants }) =>
  !filteredRestaurants.length ? (
    <NoResultsComponent />
  ) : (
    filteredRestaurants.map((restaurant) => (
      <CardComponent restaurant={restaurant} key={restaurant.id} />
    ))
  );

const HeadingComponent = () => (
  <div id="title" className="title-class" tabIndex="1">
    <h2>{title}</h2>
  </div>
);

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.588765&lng=85.0993969&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <div className="card-container">
      <SearchBar
        listOfRestaurants={listOfRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <CardContainer
        filteredRestaurants={
          filteredRestaurants.length ? filteredRestaurants : listOfRestaurants
        }
      />
    </div>
  );
};
const AppLayout = () => (
  <>
    {/* <Header /> */}
    {/* <JsxHeadingComponent /> */}
    <HeadingComponent />
    <BodyComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
