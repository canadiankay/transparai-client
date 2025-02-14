import "./App.scss";
import ResourcesList from "./components/ResourcesList/ResourcesList.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <section className="content-wrapper">
        <div className="left-side">
          <Form />
        </div>
        <ResourcesList />
      </section>
      <Footer />
    </>
  );
}

export default App;
