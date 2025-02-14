import "./App.scss";
import ResponseWindow from "./ResponseWindow/ResponseWindow";
import ResourcesList from "./components/ResourcesList/ResourcesList.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <ResourcesList/>
      <IndustryDropdown />
      <ResponseWindow />
    </>
  );
}

export default App;
