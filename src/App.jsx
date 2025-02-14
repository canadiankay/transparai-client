import "./App.scss";
import ResponseWindow from "./ResponseWindow/ResponseWindow";
import ResourcesList from "./components/ResourcesList/ResourcesList.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import IndustryDropdown from "./components/IndustryDropdown/IndustryDropdown.jsx";
import ProductList from "./components/ProductsList/ProductsList.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <ResourcesList/>
      <IndustryDropdown />
      <ProductList />
      <ResponseWindow />
    </>
  );
}

export default App;
