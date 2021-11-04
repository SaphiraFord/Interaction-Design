import React from "react";  
import styled from "styled-components";
import AppIcon from "./Assets/AppIcon.svg"
import PrivateExpandIcon from "./Assets/Private Expand Indicator Icon.svg"






const AlertBoxPrivate = styled.div`

    width: 379px;
    height: 48px;
    left: 16px;
    top: 32px;
    background-color: #FFFFFF;
    border: 0.2px solid #000000;
    box-sizing: border-box;
    border-radius: 6px;
    
    
    margin: auto;


    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;


const AppIconStyle = styled.div`


    padding: 20px;

    height: 8px;
    width: 20px;

    float: none;

    display: inline-block;
    vertical-align: middle;

    text-align:center;


    top: 20%;
    transform: translate(0, -20%);


    

`;



const TextComponent1 = styled.div`


    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;



    color: #000000;


    display: flex
    align-items: center;
    justify-content: center;

    

`;




const PublicExpandIconTouchTarget = styled.div`




    display: flex
    align-items: center;
    justify-content: center;

    height: 48px;
    width: 48px;


    
    
    

    

`;


export const Week2 = () => {

    const handleClick = () => {


        console.log("button click");

    } 
    
    return (
    

    <>


        <AlertBoxPrivate>
            <AppIconStyle>
                <img src ={AppIcon} />
            </AppIconStyle>
            <TextComponent1><p>Cativity  -  Now</p></TextComponent1>

            <PublicExpandIconTouchTarget onClick = {handleClick}>

                    <img src ={PrivateExpandIcon} alt="Expand Icon."/>

            </PublicExpandIconTouchTarget>
          

                
            
        </AlertBoxPrivate>


  

    </>
)};

export default Week2;