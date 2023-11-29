import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../../styles";

const deviceWidth = Dimensions.get("window").width;

const OtpItem = ({ icon, text, choosen, item }) => {
  return (
    <View style={styles.container(choosen, item)}>
      {icon && (
        <Ionicons
          name={icon}
          color={choosen === item ? COLORS.WHITE : COLORS.GREY}
          size={SIZES.large}
        />
      )}

      <Text style={styles.text(choosen, item)}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (choosen, item) => ({
    marginHorizontal: 5,
    backgroundColor: choosen === item ? COLORS.PRIMARY : COLORS.GREY_1_2,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-around",
  }),
  text: (choosen, item) => ({
    color: choosen === item ? COLORS.WHITE : COLORS.GREY,
  }),
});

export default OtpItem;
