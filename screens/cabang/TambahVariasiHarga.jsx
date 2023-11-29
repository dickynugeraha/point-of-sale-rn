import React, { useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextRegular } from "../../components/common/Text";
import { SIZES } from "../../styles";
import Input from "../../components/common/Input";
import { FieldButton } from "../../components/common/Button";

const TambahVariasiHarga = ({ navigation }) => {
  const [namaVariasiHarga, setNamaVariasiHarga] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      title: "Tambah Variasi Harga",
    });
  }, [navigation]);

  const handleSubmit = () => {
    navigation.navigate("Home");
  };

  return (
    <KeyboardAwareScrollView
      keyboardshouldpersisttaps={"always"}
      style={{ flex: 1, padding: SIZES.medium }}
      showsverticalscrollindicator={false}
    >
      <TextRegular
        text="Detail variasi harga"
        style={{ fontWeight: "bold", fontSize: SIZES.large }}
      />
      <Input
        text={namaVariasiHarga}
        setText={setNamaVariasiHarga}
        placeholder={"Nama variasi harga"}
        title={"Nama variasi harga"}
      />

      <View style={{ marginVertical: SIZES.medium }}>
        <FieldButton title={"Tambah variasi harga"} onPress={handleSubmit} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default TambahVariasiHarga;
