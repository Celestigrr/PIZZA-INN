import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Deals from "./components/deals.jsx";
import Assurance from "./components/assurance.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Deals />
        <Assurance />
      </main>

      <Footer />
    </>
  );
}

export default App;