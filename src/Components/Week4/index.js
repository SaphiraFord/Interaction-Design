//Allows us to use states on components
import React, { useState } from "react";
import styled from "styled-components";
import closedIcon from "./Assets/Eye Icon Closed.svg";
import openIcon from "./Assets/Eye Icon Open.svg";

//Using to manage the state in our form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Making email string as well as required, same with password
//This is components from the hook to validate the password and email
const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Not a valid email"),
  password: yup.string().required("Password is required"),
});

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledHeader = styled.h1`
  color: #1e57f1;
  margin-left: 2rem;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #c7c7c7;
  height: 63px;
  width: 337px;
  padding-left: 10px;
  font-size: 18px;
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: -80px;
  margin-bottom: -10px;
`;

const StyledErrorText = styled.p`
  color: red;
`;

const StyledButton = styled.button`
  height: 63px;
  width: 350px;
  background: #1e57f1;
  color: #ffff;
  text-align: center;
  font-size: 18px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: red;
  }
`;

const Week4 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });

  //On Submit event
  const onSubmit = (data) => {
    setSubmitted(true);
    console.log(data);
  }

  const handleClick = (e) => {
      //Shows the opposite of what its equal to now 
    setShowPassword(!showPassword);
  };

  return (
    <StyledWrapper>

      <StyledHeader> Sally </StyledHeader>
      {submitted && <h1> You're all done</h1>}
      {!submitted && (
      
      //On Submit event it calls the handle submit event
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <StyledInput
            type="text"
            name="email"
            placeholder="Email"
            //Makes email required
            ref={register()}
            //If theres an error so it = true, then it will display the .message
            //For styled error text below
          />
        </p>
        <StyledErrorText></StyledErrorText>

        <p>
          <StyledInput
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            //Makes password required
            ref={register()}
          />
          <StyledIcon
            src={showPassword ? closedIcon : openIcon}
            //When icon is clicked, the handle click event is called
            

            //If theres an error so it = true, then it will display the .message
            //For below styled error text etc
            onClick={handleClick}
          ></StyledIcon>
                
            
          <StyledErrorText> {errors.password?.message}</StyledErrorText>
          
        </p>
        <p>
          <StyledButton> Login </StyledButton>
        </p>
      </form>)}
    </StyledWrapper>
  );
};

export default Week4;