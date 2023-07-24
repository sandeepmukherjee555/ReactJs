import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardComponent from './CardComponent';

const RestaurantComponent = () => {
  const { id } = useParams();
  const [resInfo, setResInfo] = useState({});
  useEffect(() => {
    fetchRestaurantInfo();
  }, []);
  async function fetchRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.588765&lng=85.0993969&restaurantId=84869&catalog_qa=undefined&submitAction=ENTER`
    );
    //   const data = await fetch(
    //     `https://www.swiggy.com/dapi/menu/v4/full?lat=30.2984419999999&lng=77.99313599999999&menuId=149292`
    //   );
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info?.id);
    setResInfo(json.data.cards[0]);
  }
  return <CardComponent restaurant={resInfo} />;
};

export default RestaurantComponent;
