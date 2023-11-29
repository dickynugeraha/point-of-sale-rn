const COLORS = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  AQUA: "aqua",
  PRIMARY: "#1A72DD",
  BLUE_1: "#F0F8FE",
  BLUE_FB: "#3568B8",
  SOFT_BLUE: "#93C9FA",
  ORANGE: "#EA9437",
  ORANGE_1: "#FEF8E7",
  RED: "#DE5242",
  RED_1: "#FCF3F2",
  GREEN: "#35984E",
  GREEN_1: "#EBF8EE",
  GREY: "#687083",
  GREY_1: "#F9FAFB",
  GREY_1_2: "#E5E5E5",
  GREY_2: "#9AA2B1",
  GREY_3: "#D1D5DC",
  GREY_4: "#E4E7EB",
  GREY_5: "#C4C4C4",
  GREY_6: "#9E9E9F",
  GREY_7: "#EDF0F3",

  TEXT_BLACK: "#092540",
  TEXT_BLACK_1: "#214D33",
  TEXT_BLACK_2: "#1A3650",
  TEXT_BLACK_BOLD: "#192336",
  TEXT_PRIMARY: "#1A72DD",
  TEXT_GREY: "#6D7175",
  TEXT_ERROR: "#cc0000",

  RED_BTN: "#C21D2D",
  RED_BG: "rgba(194, 29, 45, 0.1)",
  BG_BUTTON: "#264078",

  SUCCESS: "#54B371",
  SUCCESS_1: "#34774C",
  BORDER_GREEN: "#8DE5AB",
  BORDER_RED: "#F1A69E",
  GREEN_BG: "#EFFCF4",
  STATUS_WAITING: "#A84D20",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
