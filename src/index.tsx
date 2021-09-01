import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/globalStyle";
import { theme } from "./style/theme";
import { SelectorType } from "utils/types";
import App from "./App";
interface Children {
  children: React.ReactNode;
}
function ThemeSetting({ children }: Children) {
  const isLightMode = useSelector((state: SelectorType) => state.screenTheme);
  const screenTheme = isLightMode ? theme.lightMode : theme.darkMode;
  return (
    <ThemeProvider theme={screenTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeSetting>
        <App />
      </ThemeSetting>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
