import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./component/SearchBar";
import RecipeCart from "./component/RecipeCart";
import Home from "./component/Home";
function App() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipe] = useState([]);

  const search = async () => {
    setLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipe(data.meals);
    setLoading(true);
  };
  useEffect(() => {
    search();
  },[]);
  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };
  return (
    <>
    <Home/>
    <div className="container">
      <h2>Recipe App</h2>
      <SearchBar
        handleSubmit={handleSubmit}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        isLoading={isLoading}
      />
      <div className="recipes">
        {recipes
          ? recipes.map((recipe) => (
              <RecipeCart key={recipe.idMeal} recipe={recipe} />
            ))
          : "No Recipes"}
      </div>
    </div>
    </>
  );
}

export default App;
