import { Theme } from "utils/types";
const palette = {
  white: "#FBFCFD",
  black: "#222222",
  grey: "#c9c9c9",
  green: "#12B886",
};
const { white, black, grey, green } = palette;
const lightMode: Theme = {
  background: white,
  headerBack: green,
  headerElement: white,
  baseFont: black,
  tabFontTrue: white,
  tabFontFalse: black,
  line: grey,
  tabBackTrue: green,
  tabBackFalse: white,
};
const darkMode: Theme = {
  background: black,
  headerBack: black,
  headerElement: white,
  baseFont: white,
  tabFontTrue: black,
  tabFontFalse: white,
  line: grey,
  tabBackTrue: white,
  tabBackFalse: black,
};

export const theme = {
  lightMode,
  darkMode,
};
