import React, { useState } from "react";
import { View } from "react-native";
import InfoCart from "../../components/home/info_cart/InfoCart";
import { SIZES } from "../../styles";
import Input from "../../components/common/Input";
import { FlatUnderlineButton } from "../../components/common/Button";

const Kasir = ({ navigation }) => {
  const [productName, setProductName] = useState("");
  const [priceProduct, setPriceProduct] = useState("");

  const onSubmit = () => {
    console.log(productName);
    console.log(priceProduct);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <Input
          title={"Nama produk"}
          value={productName}
          setValue={setProductName}
          placeholder={"Tambahan gula"}
        />
        <Input
          title={"Harga produk"}
          value={priceProduct}
          setValue={setPriceProduct}
          placeholder={"6.000"}
          attribute={{
            keyboardType: "number-pad",
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <FlatUnderlineButton text="Simpan" onPress={onSubmit} />
        </View>
      </View>
      <View style={{ marginHorizontal: SIZES.large }}>
        <InfoCart onPress={() => navigation.navigate("DetailOrder")} />
      </View>
    </View>
  );
};

export default Kasir;
