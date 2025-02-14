import "./App.scss";
import ResponseWindow from "./ResponseWindow/ResponseWindow";
import ResourcesList from "./components/ResourcesList/ResourcesList.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
    <>
      <h1>This is our Industry Project</h1>
      <ResponseWindow />
      <Nav />
      <Hero />
      <Form />

      <ResourcesList />
    </>
  );
}

export default App;
