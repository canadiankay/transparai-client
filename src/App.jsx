import "./App.scss";
import ResponseWindow from "./ResponseWindow/ResponseWindow";
import ResourcesList from "./components/ResourcesList/ResourcesList.jsx";
import Nav from "./components/Nav/Nav.jsx";

function App() {
  return (
    <>
      <Nav />
      <ResourcesList/>
      <ResponseWindow />
    </>
  );
}

export default App;
