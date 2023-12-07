import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { TextRegular, TextSmall } from "../../common/Text";
import { FieldButton, IconButton } from "../../common/Button";
import { COLORS, SIZES, images, SHADOWS } from "../../../styles";
import { BASE_URL_IMAGE } from "../../../apis/constant";

const deviceHeight = Dimensions.get("window").height;

const CardItem = ({ name, sellingPrice, image }) => {
  return (
    <View style={styles.container}>
      <Image
        source={images.prod}
        // source={`${BASE_URL_IMAGE}/${image}`}
        style={styles.boxImage}
        resizeMode="cover"
      />
      <View style={styles.boxDesc}>
        <TextRegular text={name} />
        <TextSmall text={name} />
        <View style={styles.boxPrice}>
          <TextRegular
            text={`Rp. ${sellingPrice}`}
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
