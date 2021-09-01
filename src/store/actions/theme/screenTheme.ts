import { DARK_MODE, LIGHT_MODE } from "./types";

export const switchLight = () => ({ type: LIGHT_MODE });
export const switchDark = () => ({ type: DARK_MODE });
