import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Recipes from './components/Recipes';
import SideBar from './components/SideBar';
import CreateRecipe from './components/CreateRecipes';

function App() {
  return (
    <Router>
       <div style={{ display: "flex", height: "100%" }}>
        <SideBar />
        <Switch>
            <Route path="/all">
              <Recipes />
            </Route>
            <Route path="/new">
              <CreateRecipe />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
