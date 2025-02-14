import "./App.scss";
import ResponseWindow from "./ResponseWindow/ResponseWindow";
import ResourcesList from "./components/ResourcesList/ResourcesList.jsx";
import Nav from "./components/Nav/Nav.jsx";

function App() {
  return (
    <>
      <h1>This is our Industry Project</h1>
      <ResponseWindow />
      <Nav />
      <ResourcesList/>
    </>
  );
}

export default App;
