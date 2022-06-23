import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import VarietyCard from "./components/varieties/Varities";
import TopChefs from "./components/topChefs/TopChefs";
import FoodGuide from "./components/foodGuide/FoodGuide";

function App() {
  return (
    <div className="App">
      <Header />
      <VarietyCard />
      <TopChefs />
      <FoodGuide />
    </div>
  );
}

export default App;
