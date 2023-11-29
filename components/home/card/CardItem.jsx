import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { TextRegular, TextSmall } from "../../common/Text";
import { FieldButton, IconButton } from "../../common/Button";
import { COLORS, SIZES, images, SHADOWS } from "../../../styles";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const CardItem = () => {
  return (
    <View style={styles.container}>
      <Image source={images.prods} style={styles.boxImage} resizeMode="cover" />
      <View style={styles.boxDesc}>
        <TextRegular text={"Salad Tuna"} />
        <TextSmall text={"Must choose level"} />
        <View style={styles.boxPrice}>
          <TextRegular
            text={"Rp. 10.000"}
            style={{ color: COLORS.TEXT_PRIMARY, fontWeight: "bold" }}
          />
          <IconButton
            icon="add"
            color="white"
            size={18}
            style={{
              padding: 8,
              backgroundColor: COLORS.TEXT_PRIMARY,
              borderRadius: 12,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: SIZES.small,
    backgroundColor: COLORS.WHITE,
    height: deviceHeight * 0.3,
    flex: 1,
    margin: SIZES.xSmall,
    ...SHADOWS.small,
  },
  boxImage: {
    borderTopRightRadius: SIZES.small,
    borderTopLeftRadius: SIZES.small,
    width: "100%",
    height: deviceHeight * 0.15,
  },
  boxDesc: {
    padding: SIZES.small,
  },
  boxPrice: {
    marginTop: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CardItem;
