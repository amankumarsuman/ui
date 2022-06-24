import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import VarietyCard from "./components/varieties/Varities";
import TopChefs from "./components/topChefs/TopChefs";
import FoodGuide from "./components/foodGuide/FoodGuide";
import SocialMedia from "./components/socialMedia/SocialMedia";
import TopChefsHeading from "./components/topChefHeading/TopChefsHeading";
import VarietyRight from "./components/varietyRight/VarietyRight";

function App() {
  return (
    <div className="App">
      <Header />
      <VarietyCard />
      <TopChefsHeading/>
      <TopChefs />
      <FoodGuide />
      <SocialMedia/>
    </div>
  );
}

export default App;
