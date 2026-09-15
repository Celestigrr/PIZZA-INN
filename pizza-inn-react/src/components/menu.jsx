import PizzaCard from "./pizzacard";

function Menu() {
  return (
    <>
      <main>
        <section className="menu-hero">
          <h2>OUR MENU</h2>
          <p>must be the pizza</p>
        </section>

        <section className="pizza-products-prices" id="pizza-products">
          <h3>PIZZAS</h3>

          <div className="pizza-general-info">
            <PizzaCard
              name="Chicken Macon BBQ Pizza"
              price="1300"
              image="/images/chicken-macon-bbq.jpg"
              showButton={true}
            />

            <PizzaCard
              name="Chicken Mushroom Pizza"
              price="1300"
              image="/images/chicken-mushroom.jpg"
              showButton={true}
            />

            <PizzaCard
              name="BBQ Steak Pizza"
              price="1300"
              image="/images/bbq-steak.jpg"
              showButton={true}
            />

            <PizzaCard
              name="Meat Deluxe Pizza"
              price="1300"
              image="/images/meat-deluxe.jpg"
              showButton={true}
            />

            <PizzaCard
              name="Chicken Tikka Pizza"
              price="1300"
              image="/images/chicken-tikka.jpg"
              showButton={true}
            />

            <PizzaCard
              name="Veg Tikka Pizza"
              price="1300"
              image="/images/veg-tikka.jpg"
              showButton={true}
            />

            <PizzaCard
              name="Chicken Peri Peri Pizza"
              price="1300"
              image="/images/chicken-peri-peri.jpg"
              showButton={true}
            />

            <PizzaCard
              name="Boerewors Pizza"
              price="1300"
              image="/images/boerwors.jpg"
              showButton={true}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Menu;