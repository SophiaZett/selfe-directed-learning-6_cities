import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;

export const Container = styled.div`
  margin: 100px auto;
  height: 600px;
  padding: 20px;
  max-width: 450px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 8px;
  text-align: center;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledHeader = styled.h1`
  margin-bottom: 30px;
  font-style: italic;
  font-weight: lighter;
  text-shadow: lavenderblush;
`;

export const Button = styled.button`
  color: gray;
  background-color: lavenderblush;
  border-style: hidden;
  border-radius: 20px;
  display: block;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Image = styled.img`
  width: 90%;
  height: 200px;
  margin: 5%;
`;
