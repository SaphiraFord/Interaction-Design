import React, { useState } from "react";
import styled from "styled-components";
import {useSwipeable} from 'react-swipeable';
import { MdBookmarks, MdViewHeadline as Burger } from "react-icons/md";

//import time from "./Assets/Time Icon.svg";
//import timeActive from "./Assets/Time Active Icon.svg";
//import story from "./Assets/Story Icon.svg";
//import storyActive from "./Assets/Story Active Icon.svg";
//import settings from "./Assets/Settings Icon.svg";
//import settingsActive from "./Assets/Settings Active Icon.svg";
//import likes from "./Assets/Likes Icon.svg";
//import likesActive from "./Assets/Likes Icon Active.svg";
//import help from "./Assets/Help Icon.svg";
//import helpActive from "./Assets/Help Active Icon.svg";
//import friends from "./Assets/Friends Icon.svg";
//import friendsActive from "./Assets/Friends Icon Active.svg";
import inbox from "./Assets/Email Icon.svg";
//import inboxActive from "./Assets/Email Icon Active.svg";





//import systemBar from "./Assets/System-Bar.svg";
//import homeIcon from "./Assets/Home-Icon.svg";
//import backIcon from "./Assets/Back-Icon.svg";
//import recentIcon from "./Assets/Recents-Icon.svg";
//import wifiIcon from "./Assets/Wifi-Icon.svg";
//import mobileDataIcon from "./Assets/Mobile-Data-Icon.svg";
//import batteryIcon from "./Assets/Battery-Icon.svg";


//import { useForm } from "react-hook-form";
//import { yupResolver } from "@hookform/resolvers/yup";
//import * as yup from "yup";

const StyledOutWrapper= styled.div`

    background-color: #E0F1F2;
    display: flex;
    width: 100vw;
    height: 100vh;
`

const SideBar= styled.div`

    background-color: white;
    display: flex;
    width: 256px;
    margin-right: 48px;
    height: 100vh;

`


const SocialMedia = styled.button`
height: 48px;
font-size: .875rem;
font-family: 'Baloo Thambi 2', cursive;

display: flex;
margin: 0 auto;
width: 280px;
justify-content: left;
padding: 0px;

align-items: center;

img {
width: 20px;
height: 20px;
display: inline-block;
margin-left: 16px;
margin-right: 30px;


  
  

} 


border: 1px solid #198DE1;
border: none;
color: #4A4A4A;
transition: box-shadow 0.2s;

&:hover {
cursor: pointer;
box-shadow: 0px 6px 6px 0px #00000014;
box-shadow: 0px 6px 6px 0px #0000002E;



}
`



const Week5 = () => {

  

  return (

    <StyledOutWrapper>
      <SideBar>
        <SocialMedia>

          <img src ={inbox} alt="Back icon."/>
                      <span><b>Inbox</b></span>
        </SocialMedia>







      </SideBar>





    </StyledOutWrapper>

  )
};








export default Week5;