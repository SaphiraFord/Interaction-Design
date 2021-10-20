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


    display: inline-block;
    vertical-align: middle;

    

`;




const PublicExpandIcon = styled.div`




    vertical-align: middle;

    height: 24px;
    width: 24px;


    


    display: flex;
    justify-content: center;
    align-items: center;

    

`;

const PublicExpandIconBoundingBox = styled.div`





    vertical-align: middle;

    height: 20px;
    width: 20px;




    display: flex;
    justify-content: center;
    align-items: center;

    



    

`;

const PublicExpandIconTouchTarget = styled.div`




    display: inline-block;
    vertical-align: middle;

    height: 48px;
    width: 48px;

    
    

    

`;


export const Week2 = () => (

    <>


        <AlertBoxPrivate>
            <AppIconStyle>
                <img src ={AppIcon} />
            </AppIconStyle>
            <TextComponent1><p>Cativity  -  Now</p></TextComponent1>

            <PublicExpandIconTouchTarget>
                <PublicExpandIcon>
                    <PublicExpandIconBoundingBox>
                    <img src ={PrivateExpandIcon} />
                    </PublicExpandIconBoundingBox>
                </PublicExpandIcon>
            </PublicExpandIconTouchTarget>
                
            
        </AlertBoxPrivate>


  

    </>
);

export default Week2;