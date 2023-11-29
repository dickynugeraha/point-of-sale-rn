import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { COLORS, SIZES } from "../../../styles";
import { Ionicons } from "@expo/vector-icons";
import { TextRegular } from "../../common/Text";

const InfoCart = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.boxItem}>
        <Ionicons name="cart" size={SIZES.large} color={"white"} />
        <TextRegular
          text={"8 Items"}
          style={{ color: "white", marginLeft: 8 }}
        />
      </View>
      <TextRegular text={"Total Rp. 10.000"} style={{ color: "white" }} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    bottom: 10,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.TEXT_PRIMARY,
  },
  boxItem: {
    flexDirection: "row",
  },
});

export default InfoCart;
