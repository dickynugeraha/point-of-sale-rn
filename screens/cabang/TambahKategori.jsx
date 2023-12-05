import React, { useLayoutEffect, useState } from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextRegular } from "../../components/common/Text";
import { SIZES } from "../../styles";
import Input from "../../components/common/Input";
import { FieldButton } from "../../components/common/Button";

const TambahKategori = ({ navigation }) => {
  const [categoryName, setCategoryName] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      title: "Tambah Kategori",
    });
  }, [navigation]);

  const submitHandle = () => {
    navigation.navigate("TambahVariasiHarga");
  };

  return (
    <KeyboardAwareScrollView
      keyboardshouldpersisttaps={"always"}
      style={{ flex: 1, padding: SIZES.medium }}
      showsverticalscrollindicator={false}
    >
      <TextRegular
        text="Detail Kategori"
        style={{ fontWeight: "bold", fontSize: SIZES.large }}
      />
      <Input
        value={categoryName}
        setValue={setCategoryName}
        placeholder={"Nama kategori"}
        title={"Nama kategori"}
      />
      <View style={{ marginVertical: SIZES.medium }}>
        <FieldButton title={"Tambah kategori"} onPress={submitHandle} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default TambahKategori;
