import React from "react"; 
import catLoadingScreen from "./Assets/cat-loading-screen-blue-background.gif"
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



const Week1 = () => (

    

        <>  
            <StyledWrapper2>
              <h1>Cativity</h1>
            </StyledWrapper2>
            
            <StyledWrapper1><img src ={catLoadingScreen} /></StyledWrapper1>

            

        </>
);

export default Week1;