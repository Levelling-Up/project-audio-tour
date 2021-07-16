import React from "react";
import styled from "styled-components";

const InputWithLabel = ({id, label, value, type = "text", onInputChange}) => (
    <>
        <InputLabel htmlFor={id}> {label}</InputLabel>
        &nbsp;
        <InputBox id={id} type={type} value={value} onChange={onInputChange}  autoComplete="off"/>
    </>
)


const InputLabel = styled.label`
  display: flex;
  font-family: Arial;
  font-size: 35px;
  font-weight: bolder;
  height: 38px;
  width: 60%;
  color: rgb(40, 116, 166);
  text-align: center;
`;

const InputBox = styled.input`
  display: flex;
  font-family: Arial;
  height: 40px;
  width: 60%;
  color: rgb(40, 116, 166);
  /* text-align: left; */
  font-size: 25px;
  border: 2px solid rgb(40, 116, 166);
`;

export default InputWithLabel;