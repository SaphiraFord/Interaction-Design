//importing the library React and saving it to react to use its methods
//in react functions MUST return something
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Week2 from "./Components/Week2";
import Week3 from "./Components/Week3";
import Week4 from "./Components/Week4";
import Week5 from "./Components/Week5";
import Week6 from "./Components/Week6";



//Will instantly return our navigation 

const Homepage  = () => (<nav>
  <h1>Welcome to Interaction Design!</h1>

      <Link to="/Week2">Component 1</Link>
<br></br>
<br></br>
      <Link to="/Week3">Component 2</Link>
<br></br>
<br></br>
      <Link to="/Week4">Component 3</Link>
<br></br>
<br></br>
      <Link to="/Week5">Component 4</Link>
<br></br>
<br></br>
      <Link to="/Week6">Component 5</Link>

</nav>
);



// Wrapping the app in "router" to allow for different components to be displayed through using "switch" methods

  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/Week2">
            <Week2 />
          </Route>
          <Route path="/Week3">
            <Week3 />
          </Route>
          <Route path="/Week4">
            <Week4 />
          </Route>
          <Route path="/Week5">
            <Week5 />
          </Route>
          <Route path="/Week6">
            <Week6 />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
      
    );
  }


export default App;
