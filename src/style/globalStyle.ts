import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Theme } from "utils/types";
interface Style {
  theme: Theme;
}

const GlobalStyle = createGlobalStyle`${reset}
  *{
    box-sizing:border-box;
  }
  body{
  background-color: ${(props: Style) => props.theme.background};
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,'Anton', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }`;
export default GlobalStyle;
