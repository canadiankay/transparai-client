import "./App.scss";
import ResponseWindow from "./components/ResponseWindow/ResponseWindow";
import ResourcesList from "./components/ResourcesList/ResourcesList.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Form />
      {/* <ResponseWindow /> */}
      <ResourcesList />
    </>
  );
}

export default App;
