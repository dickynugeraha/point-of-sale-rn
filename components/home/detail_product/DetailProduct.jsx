import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { COLORS, SIZES } from "../../../styles";
import { TextRegular } from "../../common/Text";
import { Ionicons } from "@expo/vector-icons";

const DetailProduct = ({ isVisible, setIsVisible }) => {
  return (
    <View style={{ flex: 1 }}>
      <Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.headerModal}>
            <TextRegular
              style={{ color: COLORS.PRIMARY, fontSize: 20 }}
              text={"Detail product"}
            />
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <Ionicons name="close" size={SIZES.xLarge} color={COLORS.GREY} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    minHeight: 300,
    padding: SIZES.medium,
    backgroundColor: COLORS.WHITE,
    borderRadius: SIZES.xSmall,
  },
  headerModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.large,
  },
});

export default DetailProduct;
