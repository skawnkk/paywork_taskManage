import { DARK_MODE, LIGHT_MODE } from "./types";

//*스크린모드 관련 액션생성함수
export const switchLight = () => ({ type: LIGHT_MODE });
export const switchDark = () => ({ type: DARK_MODE });
