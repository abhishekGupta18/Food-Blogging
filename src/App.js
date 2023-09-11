import "./App.css";

import { Hero } from "./Component/Hero/Hero";
import { AboutCard } from "./Component/About/AboutCard";
import { Footer } from "./Component/Footer/Footer";
// import { Article } from "./Component/Article/Article";
import { SimpleSlider } from "./Component/Article/Article";
function App() {
  return (
    <div className="App">
      <Hero />
      <AboutCard />
      {/* <SimpleSlider /> */}
      <Footer />
    </div>
  );
}

export default App;

//https://food-blogging-rho.vercel.app/
