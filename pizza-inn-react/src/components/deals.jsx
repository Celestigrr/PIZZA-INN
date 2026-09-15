import PizzaCard from "./PizzaCard";

function Deals() {
  return (
    <section className="deals">
      <h2>WEEKLY SPECIAL</h2>
      <p>FRENZY TUESDAY & THURSDAYS</p>

      <div className="deals-products-prices">
        <PizzaCard
          name="Hawaiian Pizza"
          price="1300"
          image="/images/hawaiian-pizza.jpg"
        />
      </div>
    </section>
  );
}

export default Deals;