import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextBoldPrimary, TextRegular } from "../common/Text";
import { COLORS, SIZES } from "../../styles";

const DiskonItem = ({ title, percentage, desc }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["#1c59bd", "#abcbff"]}
        start={[0.1, 0.1]}
        style={{ padding: SIZES.xLarge, borderRadius: SIZES.medium }}
      >
        <TextBoldPrimary
          text={`${title} - ${percentage}%`}
          style={{ color: COLORS.WHITE }}
        />
        <TextRegular
          text={desc}
          style={{ color: COLORS.WHITE, fontSize: 12 }}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.xSmall,
  },
});

export default DiskonItem;
