import IngredientsBlock from "./components/IngredientsBlock";
import RecipeBlock from "./components/RecipeBlock";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Cocktail Recipes</h1>
      <div className="main">
        <IngredientsBlock />
        <RecipeBlock ingredients={["gin", "tequila", "applejuice"]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
