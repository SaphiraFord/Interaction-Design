//importing the library React and saving it to react to use it's methods
//in react functions MUST return something
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Week1 from "./Components/Week1";
import Week2 from "./Components/Week2";
import styled from "styled-components";




const StyledWrapper1 = styled.div`
    display: flex;
    justify-content: center;
    height: 70vw;
    height: 80vh;
    background: #E0F1F2;


`;

const StyledWrapper2 = styled.div`
    display: flex;
    justify-content: center;
    height: 70vw;
    height: 20vh;
    text-align: center;
    align-items: flex-end;
    font-family: 'Baloo Bhai 2', cursive;
    font-size: 190%;
    color: #8155B4;
    background: #E0F1F2;
    

`;


// Wrapping the app in "router" to allow for different components to be displayed thorugh using "switch" methods

  function App() {
    return (
        <Router>
      
          <div> 
            <StyledWrapper2>
              <h1>Cativity</h1>
            </StyledWrapper2>
            <StyledWrapper1>
              <Week1 />
            
            </StyledWrapper1>
          </div>
          <Switch>
          <Route path="/Week1">
            <Week1 />
          </Route>
          <Route path="/Week2">
            <Week2 />
          </Route>
        </Switch>
        </Router>
      
    );
  }


export default App;
