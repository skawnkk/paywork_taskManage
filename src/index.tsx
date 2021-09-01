import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/globalStyle";
import { theme } from "./style/theme";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import App from "./App";
import { SelectorType } from "utils/types";

function ThemeSetting({ children }: any) {
  const isLightMode = useSelector((state: SelectorType) => state.screenTheme);
  const screenTheme = isLightMode ? theme.lightMode : theme.darkMode;
  return <ThemeProvider theme={screenTheme}>{children}</ThemeProvider>;
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeSetting>
        <App />
      </ThemeSetting>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
