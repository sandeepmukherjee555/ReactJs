import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import CardComponent from './CardComponent';

const title = 'Hunger Hub';

const data = [
  {
    img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qamlqozfw2h479ggimis',
    name: 'Biryani By Kilo',
    cusine: 'Biryani, Hyderabadi',
    starts: 4,
    id: 'ccref'
  },
  {
    img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ajfqjytbxd6dajl7vxzl',
    name: 'Quality Walls',
    cusine: 'Ice Cream, World',
    starts: 3,
    id: 'fece'
  },
  {
    img: ' https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/56c9ab92bd79745fd152a30fa2525426',
    name: 'Kfc Scacks',
    cusine: 'Snacks, World',
    starts: 3,
    id: 'erce'
  },
  {
    img: ' https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xuzh778frvo2c8oi81d2',
    name: 'Amrapali Cafe',
    cusine: 'Multi cusine ',
    starts: 5,
    id: 'cfcer'
  }
];

//old way
// const CardContainer = () => {
//   const cards = data.map((restaurant) => {
//     return <CardComponent restaurant={restaurant} />;
//   });
//   return cards;
// };

//latest way
const CardContainer = () =>
  data.map((restaurant) => (
    <CardComponent restaurant={restaurant} key={restaurant.id} />
  ));

const HeadingComponent = () => (
  <div id="title" className="title-class" tabIndex="1">
    <h2>{title}</h2>
  </div>
);

const BodyComponent = () => (
  <div className="card-container">
    <CardContainer />
  </div>
);
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
