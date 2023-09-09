import "./App.css";
import { Hero } from "./Component/Hero/Hero";
import { AboutCard } from "./Component/About/AboutCard";
import { Footer } from "./Component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <AboutCard />
      <Footer />
    </div>
  );
}

export default App;
