const CardComponent = ({ restaurant }) => {
  const { img, name, cusine, starts } = restaurant;
  return (
    <div id="card" className="card-class">
      <img src={img} />
      <h2>{name}</h2>
      <h3>{cusine}</h3>
      <h4>{starts} starts</h4>
    </div>
  );
};

export default CardComponent;
