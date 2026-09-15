import PizzaCard from "./PizzaCard";

function Deals() {
  return (
    <section className="deals">
      <h2>WEEKLY SPECIAL</h2>

      <p>FRENZY TUESDAY & THURSDAYS</p>

      <p>
        BUY <span className="one">ONE</span> GET{" "}
        <span className="one">ONE</span> FREE
      </p>

      <div className="deals-products-prices">
        <PizzaCard
          name="Hawaiian Pizza"
          price="1300"
          image="/images/hawaiian-pizza.jpg"
        />

        <PizzaCard
          name="Pepperoni Pizza"
          price="1100"
          image="/images/pepperoni-pizza.jpg"
        />

        <PizzaCard
          name="Supreme Pizza"
          price="1600"
          image="/images/supreme-pizza.jpg"
        />
      </div>
    </section>
  );
}

export default Deals;