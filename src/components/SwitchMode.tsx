import { useSelector, useDispatch } from "react-redux";
import { switchDark, switchLight } from "store/actions/theme/screenTheme";
import { SelectorType } from "utils/types";
import styled from "styled-components";

export default function SwitchMode() {
  const dispatch = useDispatch();
  const isLightMode = useSelector((state: SelectorType) => state.screenTheme);
  const handleScreenMode = () => {
    isLightMode ? dispatch(switchDark()) : dispatch(switchLight());
  };
  return (
    <ToggleBox>
      <Circle isLight={isLightMode} onClick={handleScreenMode}>
        😎
      </Circle>
    </ToggleBox>
  );
}
interface ScreenProp {
  isLight: boolean;
}

const ToggleBox = styled.div`
  border: 1px solid ${({ theme }) => theme.line};
  width: 50px;
  border: 1px solid #c9c9c9;
  border-radius: 30%;
  height: 25px;
`;
const Circle = styled.div<ScreenProp>`
  font-size: 20px;
  border: none;
  border-radius: 50%;
  transition: transform 0.3s;
  transform: ${(props) =>
    props.isLight ? `translateX(-2px)` : `translateX(23px)`};
`;
