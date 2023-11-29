import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import { COLORS, SIZES } from "../../styles";
import { TextRegular } from "./Text";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const CustomModal = ({ title, isPopup, setIsPopup, children }) => {
  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={isPopup}
        onBackdropPress={() => setIsPopup(false)}
        animationIn="slideInUp"
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <TextRegular text={title} style={{ color: COLORS.TEXT_ERROR }} />
              <TouchableOpacity onPress={() => setIsPopup(false)}>
                <Ionicons
                  name="close"
                  color={COLORS.GREY}
                  size={SIZES.xLarge}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {children}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: deviceWidth * 0.9,
    minHeight: deviceHeight * 0.2,
    padding: SIZES.medium,
    backgroundColor: COLORS.WHITE,
    borderRadius: SIZES.medium,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default CustomModal;
