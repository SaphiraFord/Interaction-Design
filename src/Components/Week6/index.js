import React, { useState } from "react";
import styled from "styled-components";
import hideIcon from "./Assets/hide.svg";
import showIcon from "./Assets/show.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Invalid Phone number/Username/Email!").email("Not a valid email"),
  password: yup.string().required("Invalid Password!"),
});

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh; 
  margin: 0px 0px 0px 0px;
  background:  #E0F1F2;

  p {

      width: 280px;
  }


`;




const StyledHeader = styled.h1`
font-family: 'Baloo Bhai 2', cursive;
text-align:center;
color: #8155B4;
  font-size: 4.5rem;
  margin: 30px 0px 0px 0px;
`;


const StyledHeader2 = styled.h4`
font-family: 'Baloo Bhai 2', cursive;
text-align:center;
margin: 0px 0px 0px 0px;
font-size: 1.5rem;
color: #8155B4;
`;

const StyledHeader3 = styled.h6`
font-family: 'Baloo Bhai 2', cursive;
text-align:center;
color: #8155B4;
font-size: 0.875rem;
margin: 20px 0px 0px 0px;
`;


const StyledInput = styled.input`

    border: 0px;
    box-sizing: border-box;
    outline-style: none;
    border-bottom: 1px solid #3E6264;
    
    
    
  padding-left:16px;
  padding-top: 12px;
  width: 280px;
  height: 48px;
  color:#8155B4;
  background: #A6C8CA;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom: 1px solid #3E6264;


  ::placeholder { 
    color:#8155B4;

  }
  

  &:focus {
    background-color: #98BABC;
    border-bottom: 2px solid #3E6264;


  }

  &:focus::-webkit-input-placeholder { color:transparent; }



  
`;





const StyledIcon = styled.img`

height: 20px;
width: 20px;
border-right: none;
padding: 14px 14px 14px 14px;
margin-bottom: -20px;
display : block;
position: absolute;
z-index: 1000;
margin-left: 230px; 


`;

const StyledLabel = styled.p`


border-right: none;
display : block;
position: absolute;
margin-left: 16px; 
transform: translate(0px, -14px);


width: 280px;
height: 20px;
font-size: .875rem;
font-family: 'Baloo Thambi 2', cursive;
color: #8155B4;


`;

const StyledErrorText = styled.p`
color: #ff0000;
margin: 0px 0px 0px 16px;


font-size:12px; 
`;

const StyledButton = styled.button`

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

cursor: pointer;
&:hover {
  box-shadow: 0px 6px 6px 0px #00000014;
  box-shadow: 0px 6px 6px 0px #0000002E;
}



`;

const Lines = styled.div`
font-weight: bold; 
display: flex;
width: 280px;
margin: 0 auto;
color: #8155B4;
span{
  margin: 0px 1em;
}
hr{
  width:180px;
  border: 0;
  background-color:#8155B4;
  height:2px;
`;

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

`;

const SvgIcon = styled.svg`
fill: white;
width: 18px;
height: 18px;
display: inline-block;
margin-left: -4px;
margin-right: 8px;
border-radius: 4px;
`;

const Week6 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors },watch} = useForm({
    resolver: yupResolver(schema),
    });
  const onSubmit = (data) => {
    setSubmitted(true);
    console.log(data);
  }

  const handleClick = (e) => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledWrapper>
      <StyledHeader> Cativity </StyledHeader>
      <StyledHeader2> Sign up to let your cat<br />
      play our activites </StyledHeader2>
      <br />
      {submitted /*&& <h1> You're all done</h1>*/ }
      {!submitted && (
      
      
      <form onSubmit={handleSubmit(onSubmit)} >
          
          
          <StyledLabel>Email</StyledLabel>
          <StyledInput autoFocus
            type="text"
            name="email"
            placeholder="Email"
            ref={register()}
          />
        
        <StyledErrorText> {errors.email?.message}</StyledErrorText>

        <br />

        
      
          <StyledIcon
            src={showPassword ? hideIcon : showIcon}
            onClick={handleClick}
          ></StyledIcon>

        
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            ref={register()}
          />
          
          
          <StyledErrorText> {errors.password?.message}</StyledErrorText>

        
          <br />
      
          <StyledButton> Login </StyledButton>
       

        <StyledHeader3>
          Struggling to login? <b>Reset your password!</b>
        </StyledHeader3>

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

        
        <StyledHeader3>
          <p>Not made an account? <b>Sign up!</b></p>

        </StyledHeader3>

        
      </form>)}
    </StyledWrapper>
  );
};

export default Week6;