import React from "react"; 
import styled from "styled-components";
import heartIconPurple from "./Assets/Heart Icon Purple.svg";
import heartIconWhite from "./Assets/Heart Icon White.svg";



// Creating button components


//Using string literals "${}" to use javascript 
const StyledButton = styled.button`

    color: white;




    color: ${(props) => props.fontColor};

    background-color: ${(props) => props.bkgColor};

    
    height: 36px;
    length: 65px;
    

    padding-left: ${(props) => props.paddingLeft};
    
    padding-right: 16px;
    padding-top: 10px;
    padding-bottom: 10px;

    border: none;
    {/*Passing through props color and border, if color is transparent give it a border if it's not transparent give it no border*/}
    border: ${({bkgColor, border}) => bkgColor == "transparent" ? border : "none"};
    border-radius: 4px;

    cursor: pointer;
    margin: 2%;

    



    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;



    display: flex;




    gap: 8px;
    



`;

const StyledWrapper = styled.div `

    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

  


    

`;

const imageContainer = styled.div `

    width: 18px;
    height: 18px;


    justify-content: center;
  
    align-items: center;

    

`;




//Text, color, size etc are all called in through props
export const Button = (props) => {

    //extracts the children from the props - it's called destructuring
    const {children, bkgColor, border, fontColor, paddingLeft} = props;

    return (
        <StyledButton 
        fontColor ={fontColor} 
        border ={border}   
        bkgColor={bkgColor}
        paddingLeft={paddingLeft}
        > 
        {children}{""}
        </StyledButton>
    
    );
};


const Week3 = () => {

    return (

        <StyledWrapper>

            <Button paddingLeft="16px" bkgColor="#7F54B3">LIKE</Button>
            <Button paddingLeft="12px" bkgColor="#7F54B3"><imageContainer><img src ={heartIconWhite} /></imageContainer>LIKE</Button>
            <Button paddingLeft="16px" border ="1px solid #7F54B3" bkgColor="transparent" fontColor="#7F54B3">LIKE</Button>
            <Button paddingLeft="12px" border ="1px solid #7F54B3" bkgColor="transparent" fontColor="#7F54B3"><imageContainer><img src ={heartIconPurple} /></imageContainer>LIKE</Button>
            <Button paddingLeft="16px" bkgColor="transparent" fontColor="#7F54B3">LIKE</Button>
            <Button paddingLeft="12px" bkgColor="transparent" fontColor="#7F54B3"><imageContainer><img src ={heartIconPurple} /></imageContainer>LIKE</Button>
        </StyledWrapper>

    )
};

export default Week3;