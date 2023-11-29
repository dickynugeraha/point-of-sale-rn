import { Text } from "react-native";
import { COLORS, FONT, SIZES } from "../../styles";

export const TextSmall = ({ text, style = null }) => {
  return (
    <Text
      style={[
        {
          fontSize: SIZES.small,
          color: COLORS.GREY_2,
          fontFamily: FONT.regular,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
};
export const TextRegular = ({ text, style = null }) => {
  return (
    <Text
      style={[
        {
          fontSize: SIZES.medium,
          color: COLORS.TEXT_BLACK,
          fontFamily: FONT.regular,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
};

export const TextBoldPrimary = ({ text }) => {
  return (
    <Text
      style={{
        fontSize: SIZES.xLarge,
        color: COLORS.TEXT_PRIMARY,
        fontFamily: FONT.regular,
      }}
    >
      {text}
    </Text>
  );
};
