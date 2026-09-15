function PizzaCard({ name, price, image }) {
  return (
    <div className="deals-product">
      <img src={image} alt={name} />

      <p>{name}</p>
      <p>KES {price}</p>
    </div>
  );
}

export default PizzaCard;