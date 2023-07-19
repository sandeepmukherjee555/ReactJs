import React, { createElement, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import CardComponent from './CardComponent';
import data from './data.json';
import { title } from './constants';
import SearchBar from './SearchBar';

//old way
// const CardContainer = () => {
//   const cards = data.map((restaurant) => {
//     return <CardComponent restaurant={restaurant} />;
//   });
//   return cards;
// };

//latest way
const CardContainer = ({ filteredRestaurants }) =>
  filteredRestaurants.map((restaurant) => (
    <CardComponent restaurant={restaurant} key={restaurant.id} />
  ));

const HeadingComponent = () => (
  <div id="title" className="title-class" tabIndex="1">
    <h2>{title}</h2>
  </div>
);

const BodyComponent = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(data);
  return (
    <div className="card-container">
      <SearchBar setFilteredRestaurants={setFilteredRestaurants} />
      <CardContainer filteredRestaurants={filteredRestaurants} />
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
