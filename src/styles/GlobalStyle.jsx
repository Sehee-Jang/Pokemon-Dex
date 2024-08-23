import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    /* background-color: #FFFACD; */
    background-color: #fee496;
    /* background-color: #FFCB05; */
    /* background-color: #f0f8ff; */
    /* background-color: #2A75BB; */
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    display:flex;
    justify-content: center;
    place-items:center;
    min-width: 320px;
    min-height: 100vh;
  }

  #root {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  a {
  text-decoration: none;
  color: inherit;
  }

  h2 {
  font-size: 1.5em;
  font-weight: bold;
  }

`;

export default GlobalStyle;
