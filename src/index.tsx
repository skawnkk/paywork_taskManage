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

//*globalTheme에 customTheme를 사용하기 위한 ThemeSetting 컴포넌트
//- <GlobalTheme>을 return해준다.
//- redux 전역상태관리를 통한 스크린테마 설정
//- 스크린 초기값은 reducer/screenTheme에서 관리
//- 모드 전환시 마다 전환된 값을 로컬스토리지에 저장
//- => 페이지 새로고침해도 모드를 유지할 수 있도록

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
