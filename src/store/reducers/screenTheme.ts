import { DARK_MODE, LIGHT_MODE } from "../actions/theme/types";
const INITIAL_STATE = true;

export default function screenTheme(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case LIGHT_MODE:
      return true;
    case DARK_MODE:
      return false;
    default:
      return state;
  }
}
