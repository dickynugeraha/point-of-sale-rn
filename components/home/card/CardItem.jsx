import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { TextRegular } from "../../common/Text";
import { IconButton } from "../../common/Button";
import { COLORS, SIZES, SHADOWS, images } from "../../../styles";
import { BASE_URL_IMAGE } from "../../../apis/constant";
import DetailProduct from "../detail_product/DetailProduct";

const deviceHeight = Dimensions.get("window").height;

const CardItem = ({ prod }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsVisibleModal(true)}
    >
      <Image
        source={images.prod}
        // source={{ uri: `${BASE_URL_IMAGE}/${prod.photo}` }}
        style={styles.boxImage}
        resizeMode="cover"
      />
      <View style={styles.boxDesc}>
        <DetailProduct
          isVisible={isVisibleModal}
          setIsVisible={setIsVisibleModal}
          prod={prod}
        />
        <TextRegular text={prod.name} />
        <View style={styles.boxPrice}>
          <TextRegular
            text={`Rp. ${prod.selling_price}`}
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
    </TouchableOpacity>
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
