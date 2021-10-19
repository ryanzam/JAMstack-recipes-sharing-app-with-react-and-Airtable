import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Recipes from './components/Recipes';
import SideBar from './components/SideBar';
import CreateRecipe from './components/CreateRecipes';
import Home from './components/Home';

function App() {
  return (
    <Router>
       <div style={{ display: "flex", height: "100%" }}>
        <SideBar />
        <Switch>
            <Route path="/all" exact>
              <Recipes />
            </Route>
            <Route path="/new" exact>
              <CreateRecipe />
            </Route>
            <Route>
              <Home />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
