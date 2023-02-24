import {createGlobalStyle} from "styled-components";
import {COLORS} from "../lib/constants/constants";

export const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${COLORS.TEXT_COLOR};
    background-color: ${COLORS.BACKGROUND_COLOR};
    min-height: calc(100vh - 40px);
    
  }
  
  h1 {
    margin: 0 !important;
  }
  
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  button {
    font-family: inherit;
  }
  
  #root {
    max-width: 800px;
    min-height: calc(100vh - 40px);
    margin: 20px auto;
    border-radius: 10px;
    background-color: ${COLORS.BACKGROUND_COLOR_TWO};
    display: flex;
    flex-direction: column;
  }
`