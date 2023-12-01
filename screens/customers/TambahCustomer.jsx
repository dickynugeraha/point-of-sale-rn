import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { SIZES } from "../../styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../components/common/Input";
import { FieldButton } from "../../components/common/Button";

const TambahCustomer = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Tambah Cabang",
    });
  }, [navigation]);

  return (
    <KeyboardAwareScrollView
      keyboardshouldpersisttaps={"always"}
      style={{ flex: 1, padding: SIZES.medium }}
      showsverticalscrollindicator={false}
    >
      <Input title={"Nama"} placeholder={"Contoh: budiman"} />
      <Input title={"No telepon"} placeholder={"Contoh: 082154458124"} />
      <Input title={"Email"} placeholder={"Contoh: budiman@gmail.com"} />
      <Input title={"Alamat"} placeholder={"Contoh: jl. badawasa"} />
      <View style={{ marginVertical: SIZES.small }}>
        <FieldButton title={"Tambah customer"} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default TambahCustomer;
