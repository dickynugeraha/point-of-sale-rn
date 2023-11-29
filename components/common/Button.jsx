import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../styles";
import { Ionicons } from "@expo/vector-icons";

export const FieldButton = ({ title, icon, onPress, style = null }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles.fieldButton, styles.rowDirection, style]}
    >
      {icon != null && (
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 24,
            height: 24,
            marginRight: 12,
          }}
        />
      )}
      <Text
        style={{
          color: COLORS.WHITE,
          fontWeight: "bold",
          fontSize: SIZES.medium,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const IconButton = ({ onPress, icon, size, color, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Ionicons name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

export const FlatUnderlineButton = ({ text, onPress, styleText = null }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginVertical: SIZES.small }}>
      <Text style={[styles.flatTextButton, styleText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    borderRadius: SIZES.xSmall,
    alignItems: "center",
    justifyContent: "center",
  },
  fieldButton: {
    backgroundColor: COLORS.PRIMARY,
  },
  rowDirection: {
    flexDirection: "row",
  },
  flatTextButton: {
    textAlign: "center",
    color: COLORS.TEXT_PRIMARY,
    fontSize: SIZES.medium,
    textDecorationLine: "underline",
    textDecorationColor: COLORS.TEXT_PRIMARY,
  },
});
