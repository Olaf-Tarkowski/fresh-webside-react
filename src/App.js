import CardSlider from "./components/Home/CardSlider";
import Hero from "./components/Home/Hero";
import InfoCards from "./components/Home/InfoCards";
import NavBar from "./components/Home/NavBar";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <CardSlider />
      <Hero />
      <InfoCards />
      <Footer/>
    </>
  );
}

export default App;
