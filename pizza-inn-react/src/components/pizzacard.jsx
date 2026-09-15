function PizzaCard({ name, price, image }) {
  return (
    <div className="deals-product">
      <img src={image} alt={name} />

      <div className="pizza-info">
        <p>{name}</p>

        <div className="pizza-price-row">
          <p>KES {price}</p>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;