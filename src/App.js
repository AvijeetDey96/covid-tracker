import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Description from './pages/Home/Description/Description';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <p>Covid Tracker</p>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/description/:id">
            <Description />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
