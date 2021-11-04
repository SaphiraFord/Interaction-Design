import React, { useState } from "react";
import styled from "styled-components";
import hideIcon from "./Assets/Eye_Icon_Closed.svg";
import showIcon from "./Assets/Eye_Icon_Open.svg";
import systemBar from "./Assets/System-Bar.svg";
import homeIcon from "./Assets/Home-Icon.svg";
import backIcon from "./Assets/Back-Icon.svg";
import recentIcon from "./Assets/Recents-Icon.svg";
import wifiIcon from "./Assets/Wifi-Icon.svg";
import mobileDataIcon from "./Assets/Mobile-Data-Icon.svg";
import batteryIcon from "./Assets/Battery-Icon.svg";


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";





//Making a div to hold everything inside, sets the background color to gray and aligns everything in the center
const StyledOutWrapper= styled.div`

    background-color: #DCDCDC;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    align-items: center;
`
//Making a div with the same dimensions of a google pixel 2 to act as the phone screen and center everything inside
const StyledWrapper = styled.div`
    align-items: center;
    justify-content: center;
    width: 411px;
    height: 731px;
    
    border: 1px solid #F9F9F9;
    background:  #E0F1F2;

    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.08);
    overflow:hidden;
`
//Configuring the forms
const FormTxt = styled.form`
    /*Setting the font, text colour, display type and margin for label and input */
    label, input{
      display: table;
      margin: 0 auto;
      color: #8155B4;
      font-family: 'Baloo Thambi 2', cursive;
    }

    label{
      position: relative;


      /* Setting the label to transparent when the text box isn't selected*/

      /* Also setting padding to the top and left to fit the guidelines */
      span:nth-of-type(1){
        padding-left:16px;
        font-size: 10px;
        position:absolute;
        top: 6px;
        opacity:0;
      }

      /* Error message properties*/
      span:nth-of-type(2) {
        color: #ff0000;
        margin-top: 12px;
        font-size:12px; 
        
      }
    }

    hr{
      width:180px;
      height:1px;
      color:#8155B4;
      background-color:#8155B4;
      }

    label:focus-within{

      /* Setting the label to visible when the text box is selected*/
      span:nth-of-type(1){
        opacity:1;
  
        
      }

      
    }

   

    /* Setting input to have no styles or border apart from the bottom*/
    input{
        border: 0px;
        box-sizing: border-box;
        outline-style: none;
        border-bottom: 1px solid #3E6264;
        
    }
    /* Setting the properties for the input boxes, making sure sizes fit guidelines etc*/
    input[type="email"], input[type="password"]{
      padding-left:16px;
      padding-top: 12px;

      width: 280px;
      height: 48px;
      color:#8155B4;
      background: #A6C8CA;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      border-bottom: 1px solid #3E6264;
    }
    /* Allowing placeholder text to be set for password and email + changing color*/
    input[type="email"]::placeholder, input[type="password"]::placeholder{
      color:#8155B4;
    }


    /*puts eye icon on the right with sufficient padding for guidelines*/
    img {

   
      height: 20px;
      width: 20px;
      border-right: none;
      padding: 14px 14px 14px 14px;
      position: absolute; right: 0; top: 1px
    } 
    


    /* Setting the text boxes when focused on to a darker colour and thicker stroke to meet guidelines*/
    input[type="email"]:focus {
      background-color: #98BABC;
      border-bottom: 2px solid #3E6264;

    }

    input[type="password"]:focus {
      background-color: #98BABC;
      border-bottom: 2px solid #3E6264;
      

    }

    /* Making placeholder text transparent when the text boxes are focused*/
    input:focus::-webkit-input-placeholder {
      color: transparent;

    }
    


    /* Setting paragraph settings*/
    p{
      text-align:center;
      font-size:12px;
      color: #8155B4;
      font-family: 'Baloo Thambi 2', cursive;
    }

    /* Submit button properties*/
    input[type="submit"]{
        width: 280px;
        height: 36px;
        font-weight: bold;  
        text-transform: uppercase;
        font-size: .875rem;
        font-family: 'Baloo Thambi 2', cursive;

        background: #8155B4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18), 0px 2px 2px rgba(0, 0, 0, 0.08);
        color: white;
        border: 1px solid #B6B6B6;
        box-sizing: border-box;
        border-radius: 4px;
        transition: box-shadow 0.2s;
    }
    input[type="submit"]:hover{
        box-shadow: 0px 6px 6px 0px #00000014;
        box-shadow: 0px 6px 6px 0px #0000002E;
        cursor: pointer;
    }
    input[type="submit"]:active{
    }
`
//Properties for social media buttons
//Padding is 16px either side to fit with guidlines
const SocialMedia = styled.button`
height: 36px;
font-size: .875rem;
text-transform: uppercase;
padding: 0 16px 0 16px;
font-family: 'Baloo Thambi 2', cursive;

display: flex;
margin: 0 auto;
width: 280px;
justify-content: center;
align-items: center;

border-radius: 4px;
box-shadow: 0px 2px 2px 0px #00000014;
box-shadow: 0px 4px 4px 0px #0000002E;

border: 1px solid #198DE1;
border: none;
background: #4267B2;
color: white;
transition: box-shadow 0.2s;

&:hover {
cursor: pointer;
box-shadow: 0px 6px 6px 0px #00000014;
box-shadow: 0px 6px 6px 0px #0000002E;

}

`

//Making the svg icon inside the social media buttons the correct size (18px), 
//positioning it in the correct place and giving it a white fill to make the icon show up
const SvgIcon = styled.svg`
fill: white;
width: 18px;
height: 18px;
display: inline-block;
margin-left: -4px;
margin-right: 8px;
border-radius: 4px;
`;




/* Setting header properties*/
const Header = styled.header`
    font-family: 'Baloo Bhai 2', cursive;
    text-align:center;
    color: #8155B4;

    h1{
      font-size: 4rem;
      margin: 0px 0px 0px 0px;
      }

    h4{
      margin: 0px 30px 30px 30px;
    }
`

//Properties for the lines next to "OR"
const Lines = styled.div`
font-weight: bold; 
display: flex;
width: 280px;
color: #8155B4;
margin: 0 auto;
span{
margin: 0px 1em;
}
hr{
width:180px;
}
`
//Properties for bottom nav bar
//Spacing images evenly and placing div at the bottom of the page
const NavBar = styled.div`
display: flex;
width: 411px;
height: 55px;
background: black;
align-items: center;
justify-content: space-evenly;



/*positioning navigation icons with sufficient padding for guidelines, touch target of 48 x48 with a live area of 20 x 20*/
    img {
      display: flex;
      height: 20px;
      width: 20px;
      padding: 14px 14px 14px 14px;
  
    } 
}
`
//Properties for bottom nav bar
//Making elements centered
const SystemBar = styled.div`
display: flex;
width: 411px;
height: 24px;
background: #E0E0E0;
align-items: center;




/*positioning system icons with sufficient padding for guidelines, with a live area of 20 x 20*/
    img {
      display: flex;
      height: 20px;
      width: 20px;
      justify-content: flex-end;

      
      
  
    } 
/*giving text a a margin left and right to space out the text and images*/
    p {
      
      font-family: 'Baloo Bhai 2', cursive;
      color: #424242;
      font-size: 14px;
      display: flex;
      margin-left: 4px;
      margin-right: 320px;

      
    } 

}
`


const Week4 = () => {




  return (
        <StyledOutWrapper>
        <StyledWrapper>


          <SystemBar>



          <p>10:11</p>
          <img src ={wifiIcon} alt="Wifi icon."/>
          <img src ={mobileDataIcon} alt="Mobile data icon."/>
          <img src ={batteryIcon} alt="Battery icon."/>
          
    

          </SystemBar>
            <Header>
              <h1>Cativity</h1>
              <h4>Sign up to let your cat <br/> play our activites</h4>
            </Header>
            <FormTxt>
 
                <label>
                    <span>Phone number/Username/Email</span>

                    
                    <input type="email" placeholder="Phone Number/Username/Email" autoFocus/>

                    <span>Invalid Phone Number/Username/Email! Please retry.</span>
                   
                </label>

                <br />
                <label>
                  
                    <span>Password</span>
                    
                    <img src ={hideIcon} alt="Closed eye icon."/>
                    <input type="password" placeholder="Password"/>
                    
                    <span>Incorrect password! Please retry.</span>
                    
                </label>

                <br />
                <input type="submit" value="Login"  />

        
               
                <p>Struggling to login? <b>Reset your password!</b></p>

           
                <br />

                <Lines>
                <hr />
                <span>OR</span>
                <hr />
                </Lines>
                
                <br />

                <SocialMedia>
                      <SvgIcon viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.57143 3H18.4286C19.8487 3 21 4.15127 21 5.57143V18.4286C21 19.8487 19.8487 21 18.4286 21L15.8572 21V14.9677H17.4L18.4286 12.2641H15.8572V10.186C15.8572 9.10462 17.9143 9.64532 17.9143 9.64532V6.94182C13.8 6.40113 12.7714 8.56392 12.7714 10.186V12.2641H10.7143V14.9677H12.7714V21L5.57143 21C4.15127 21 3 19.8487 3 18.4286V5.57143C3 4.15127 4.15127 3 5.57143 3Z" /></SvgIcon>
                      <span><b>LOG IN WITH FACEBOOK</b></span>
                </SocialMedia>

                <br />
                <SocialMedia style={{backgroundColor: "#4C8BF5"}}>
                  <SvgIcon viewBox="0 0 24 24" style={{backgroundColor: "white"}}>
                  <path d="M20.6175 12.2024C20.6175 11.6099 20.565 11.0474 20.475 10.4999H12V13.8825H16.8525C16.6349 14.9924 15.9975 15.93 15.0525 16.5674V18.8174H17.9475C19.6425 17.2499 20.6175 14.94 20.6175 12.2024Z" fill="#4285F4"/>
                  <path d="M12 21C14.4301 21 16.4625 20.19 17.9475 18.8175L15.0525 16.5675C14.2425 17.1075 13.2151 17.4376 12 17.4376C9.6525 17.4376 7.665 15.855 6.9525 13.7175H3.96751V16.035C5.445 18.975 8.4825 21 12 21Z" fill="#34A853"/>
                  <path d="M6.9525 13.7174C6.76499 13.1775 6.6675 12.6 6.6675 12C6.6675 11.4 6.7725 10.8225 6.9525 10.2825V7.96497H3.9675C3.3525 9.17996 3 10.545 3 12C3 13.455 3.3525 14.8199 3.9675 16.0349L6.9525 13.7174Z" fill="#FBBC05"/>
                  <path d="M12 6.56249C13.3276 6.56249 14.5125 7.02 15.45 7.91249L18.015 5.34749C16.4625 3.8925 14.4301 3 12 3C8.4825 3 5.445 5.025 3.96751 7.965L6.9525 10.2825C7.665 8.145 9.6525 6.56249 12 6.56249Z" fill="#EA4335"/> 
                  </SvgIcon>
                  <span><b>LOG IN WITH GOOGLE</b></span>
                </SocialMedia>

                <p>Not made an account? <b>Sign up!</b></p>
               
  
                
            </FormTxt>
         

            <NavBar><img src ={backIcon} alt="Back icon."/><img src ={homeIcon} alt="Home icon."/><img src ={recentIcon} alt="Recents icon."/></NavBar>
              
        </StyledWrapper>
    </StyledOutWrapper>

)

}



export default Week4;