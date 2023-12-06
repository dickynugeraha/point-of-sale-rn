import React, { useLayoutEffect, useState } from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextRegular } from "../../components/common/Text";
import { SIZES } from "../../styles";
import Input from "../../components/common/Input";
import {
  FieldButton,
  FlatUnderlineButton,
} from "../../components/common/Button";
import API from "../../apis/apisProvider";

const TambahCabang = ({ navigation }) => {
  const [namaCabang, setNamaCabang] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noWa, setNoWa] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      title: "Tambah Cabang",
    });
  }, [navigation]);
  const validateInput = () => {
    if (namaCabang.length === 0 || alamat.length === 0 || noWa.length === 0) {
      return false;
    }
    return true;
  };

  const submitHandler = async () => {
    if (!validateInput) return;
    // const response = await API.onCreateCabang({
    //   name: namaCabang,
    //   address: alamat,
    //   whatsapp_number: noWa,
    // });
    // console.log(response.status);
    // return;
    navigation.navigate("TambahKategori");
  };

  return (
    <KeyboardAwareScrollView
      keyboardshouldpersisttaps={"always"}
      style={{ flex: 1, padding: SIZES.medium }}
      showsverticalscrollindicator={false}
    >
      <TextRegular
        text="Detail Cabang"
        style={{ fontWeight: "bold", fontSize: SIZES.large }}
      />
      <Input
        value={namaCabang}
        setValue={setNamaCabang}
        placeholder={"Nama cabang"}
        title={"Nama cabang"}
      />
      <Input
        value={alamat}
        setValue={setAlamat}
        placeholder={"Alamat cabang"}
        title={"Alamat cabang"}
        attribute={{
          multiline: true,
          numberOfLines: 3,
        }}
      />
      <Input
        value={noWa}
        setValue={setNoWa}
        placeholder={"Nomor whatsapp cabang"}
        title={"Nomor whatsapp cabang"}
        attribute={{
          keyboardType: "number-pad",
        }}
      />
      <View style={{ marginVertical: SIZES.small, alignItems: "flex-end" }}>
        <FieldButton
          title={"Tambah cabang"}
          onPress={submitHandler}
          style={{ width: "100%" }}
        />
        <FlatUnderlineButton
          text={"Skip"}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default TambahCabang;
