import React from "react"; 
import styled from "styled-components";



// Creating button components


//Using string literals "${}" to use javascript 
const StyledButton = styled.button`
    color: #fff;
    
    background-color: ${(props) => props.color};

    
    height: 36px;
    length: 65px;
    

    padding-left: 16px;
    padding-right: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    
    border: 0;
    border-radius: 4px;

    cursor: pointer;
    margin: 2%;

    



    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;




    



`;

const StyledWrapper = styled.div `

    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    

`;


//Text, color, size etc are all called in through props
const Button = (props) => {

    //extracts the children from the props - it's called destructuring
    const {children, color, border} = props


    return <StyledButton border ={border}   color={color} > {children} </StyledButton>
    

};


const Week3 = () => {

    return (

        <StyledWrapper>

            <Button color="#7F54B3">LIKE</Button>
            <Button border ="5px solid red" color="transparent">LIKE</Button>
            <Button color="transparent">LIKE</Button>
        </StyledWrapper>

    )
};

export default Week3;