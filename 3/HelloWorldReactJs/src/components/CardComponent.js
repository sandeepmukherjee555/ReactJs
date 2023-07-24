const CardComponent = ({ restaurant }) => {
  // const { img, name, cusine, stars } = restaurant;

  if (!restaurant?.data) return null;

  const { name, cuisines, avgRating, cloudinaryImageId } = restaurant?.data;
  return (
    <div id="card" className="card-class">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export const BeautifulCardComponent = () => {
  return (
    <div className="style-container">
      <CardComponent />
    </div>
  );
};

export default CardComponent;
