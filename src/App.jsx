import "./App.scss";
import ResponseWindow from "./ResponseWindow/ResponseWindow";
import ResourcesList from "./components/ResourcesList/ResourcesList.jsx";
import Nav from "./components/Nav/Nav.jsx";
import IndustryDropdown from "./components/IndustryDropdown/IndustryDropdown.jsx";

function App() {
  return (
    <>
      <Nav />
      <ResourcesList/>
      <IndustryDropdown />
      <ResponseWindow />
    </>
  );
}

export default App;
