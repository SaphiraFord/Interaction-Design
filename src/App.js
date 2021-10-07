//importing the library React and saving it to react to use it's methods
//in react functions MUST return something
import React from "react";
import Week1 from "./Components/Week1";
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




  function App() {
    return (
      
        <div> 
          <StyledWrapper2>
            <h1>Cativity</h1>
          </StyledWrapper2>
          <StyledWrapper1>
            <Week1 />
          
          </StyledWrapper1>
        </div>
      
    );
  }


export default App;
