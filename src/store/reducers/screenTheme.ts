import { DARK_MODE, LIGHT_MODE } from "../actions/theme/types";
interface ThemeAction {
  type: string;
}

//*스크린모드 관련 리듀서
//- 초기값 로컬스토리지에서 확인, 로컬 저장값 없을 경우 기본 라이트모드

const getLocalState = () => {
  const currentTheme = localStorage.getItem("screenTheme");
  if (!currentTheme) return true;
  return !!(currentTheme === "true");
};

const INITIAL_STATE = getLocalState();

export default function screenTheme(
  state = INITIAL_STATE,
  action: ThemeAction
) {
  switch (action.type) {
    case LIGHT_MODE:
      return true;
    case DARK_MODE:
      return false;
    default:
      return state;
  }
}
