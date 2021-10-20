//importing the library React and saving it to react to use it's methods
//in react functions MUST return something
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Week1 from "./Components/Week1";
import Week2 from "./Components/Week2";
import Week3 from "./Components/Week3";

//Will instantly return our navigation 
const Homepage  = () => (<nav>
  <h1>Welcome to Interaction Design!</h1>
  <ul>
    <li>
      <Link to="/Week1">Week 1</Link>
      <Link to="/Week2">Week 2</Link>
      <Link to="/Week3">Week 3</Link>
    </li>
  </ul>
</nav>
);



// Wrapping the app in "router" to allow for different components to be displayed through using "switch" methods

  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/Week1">
            <Week1 />
          </Route>
          <Route path="/Week2">
            <Week2 />
          </Route>
          <Route path="/Week3">
            <Week3 />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
      
    );
  }


export default App;
