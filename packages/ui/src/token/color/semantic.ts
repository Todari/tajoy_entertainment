import { PRIMITIVE_COLORS } from "./primitive";

export const SEMANTIC_COLORS = {
  primary: {
    value: PRIMITIVE_COLORS.tajoyOrange[700].value
  },
  secondary: {
    value: PRIMITIVE_COLORS.tajoyGray[600].value
  },
  light: {
    value: PRIMITIVE_COLORS.tajoyGray[100].value
  },
  lightGray: {
    value: PRIMITIVE_COLORS.tajoyGray[300].value
  },
  gray: {
    value: PRIMITIVE_COLORS.tajoyGray[500].value
  },
  darkGray: {
    value: PRIMITIVE_COLORS.tajoyGray[700].value
  },
  dark: {
    value: PRIMITIVE_COLORS.tajoyGray[900].value
  },
  // success: PRIMITIVE_COLORS.green[300],
  // warning: PRIMITIVE_COLORS.red[500],
  // error: PRIMITIVE_COLORS.crimson[700],
  black: {
    value: PRIMITIVE_COLORS.tajoyBlack.value
  },
  white: {
    value: PRIMITIVE_COLORS.tajoyWhite.value
  }
} as const;
