import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../styles";
import { TextRegular } from "../common/Text";

const ButtonLogout = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: SIZES.small,
        borderColor: COLORS.TEXT_ERROR,
        borderWidth: 1,
        padding: SIZES.medium,
      }}
    >
      <TextRegular
        style={{ color: COLORS.TEXT_ERROR, textAlign: "center" }}
        text={"Logout"}
      />
    </TouchableOpacity>
  );
};

export default ButtonLogout;
