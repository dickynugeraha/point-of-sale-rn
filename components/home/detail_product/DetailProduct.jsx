import React from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { COLORS, SIZES, images } from "../../../styles";
import { TextRegular, TextSmall } from "../../common/Text";
import { Ionicons } from "@expo/vector-icons";
import { BASE_URL_IMAGE } from "../../../apis/constant";

const DetailProduct = ({ isVisible, setIsVisible, prod }) => {
  return (
    <View style={{ flex: 1 }}>
      <Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.headerModal}>
            <TextRegular
              style={{ color: COLORS.PRIMARY, fontSize: 20 }}
              text={prod.name}
            />
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <Ionicons name="close" size={SIZES.xLarge} color={COLORS.GREY} />
            </TouchableOpacity>
          </View>
          <Image
            source={images.prod}
            // source={{ uri: `${BASE_URL_IMAGE}/${prod.photo}` }}
            resizeMode="cover"
            style={styles.image}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <DeskripsiProduct
              title={"Nama outlet "}
              value={`${prod.outlet_name}`}
            />
            <DeskripsiProduct
              title={"Jumlah stock "}
              value={`${
                prod.stock.length === 0 ? "Stok tak terbatas" : prod.stock
              }`}
            />
            {prod.is_price_variant === "1" && (
              <View style={{ marginBottom: 5 }}>
                <TextRegular text={"Variasi harga"} />
                {prod.price_variant.map((val) => {
                  return (
                    <View style={{ flexDirection: "row" }}>
                      <TextSmall
                        text={`• ${val.product_price_variant_category_name} `}
                      />
                      <TextSmall text={`(Rp. ${val.price})`} />
                    </View>
                  );
                })}
              </View>
            )}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const DeskripsiProduct = ({ title, value }) => {
  return (
    <View style={styles.desc}>
      <TextRegular text={title} />
      <TextSmall text={value} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    minHeight: 300,
    maxHeight: 700,
    padding: SIZES.medium,
    backgroundColor: COLORS.WHITE,
    borderRadius: SIZES.xSmall,
  },
  headerModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.large,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
  },
  desc: {
    marginBottom: 5,
  },
});

export default DetailProduct;
