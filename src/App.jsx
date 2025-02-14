import "./App.scss";
import ResourcesList from "./components/ResourcesList/ResourcesList.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
    <>
      <Nav />

      <Form />

      <ResourcesList />
    </>
  );
}

export default App;
