import "./App.css";
import IngredientsBlock from "./components/IngredientsBlock";
import RecipeBlock from "./components/RecipeBlock";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>Cocktail Recipes</h1>
      <div className="main container">
        <IngredientsBlock />
        <RecipeBlock />
      </div>
      <Footer />
    </div>
  );
}

export default App;
