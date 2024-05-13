import React from "react";
import styled from "styled-components";
import camera from "/Users/dongjae/LikeLion/240508/FE-react-styled-component-clonecoding/src/assets/camera.svg";

const Background = styled.div`
  background-color: #343a40;
  height: 7%;
  width: 100%;
  position: fixed;
display:flex;
justify-content:center;
align-items:center;
`;
const Icon = styled.div`

    vertical-align:middle;
    margin-left:3rem;
  width: 1.5%;
  height: 100%;
`;
const Icon2 = styled.div`
    /* margin-top:0.5rem; */
    opacity:50%;
    vertical-align:middle;
    margin-left:60rem;
  width: 3.5%;
  height: 65%;
  border: 1px solid gray;
  border-radius:4px;

`;
const Album = styled.h1`
  color:white;
font-size:1.2rem;
font-weight:bold;
margin-left:0.7rem;
`;


function Header() {
  return (
    <Background>
      <Icon>
      <svg width="100%" height="100%" color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>
      </Icon>
      <Album>Album</Album>
        <Icon2>
        <svg width="100%" height="100%" color="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>

        </Icon2>
    </Background>
  )
};

export default Header;
