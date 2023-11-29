import React, { useState } from "react";
import { ToastAndroid, View } from "react-native";

import Input from "../../components/common/Input";
import { SIZES } from "../../styles";
import { FieldButton } from "../../components/common/Button";
import API from "../../apis/apisProvider";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Daftar = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [noWa, setNoWa] = useState("");
  const [password, setPassword] = useState("");

  const validateInput = () => {
    if (
      email.length === 0 ||
      !email.includes("@") ||
      namaLengkap.length === 0 ||
      noWa.length === 0 ||
      password.length === 0 ||
      password.length < 6
    ) {
      return false;
    }
    return true;
  };

  const submitHandler = async () => {
    if (!validateInput()) return;

    const response = await API.register({
      name: namaLengkap,
      email: email,
      whatsapp_number: noWa,
      password: password,
    });

    if (response?.data?.success === true) {
      navigation.replace("TambahCabang");
    }
    if (response?.response?.status === 400) {
      const messageList = response.response.data.data;
      ToastAndroid.show(
        `${messageList[0]} ${
          messageList[1] != undefined ? messageList[1] : ""
        }`,
        ToastAndroid.BOTTOM
      );
    }
  };

  return (
    <KeyboardAwareScrollView
      keyboardshouldpersisttaps={"always"}
      style={{ flex: 1, padding: SIZES.medium }}
      showsverticalscrollindicator={false}
    >
      <View>
        <Input
          placeholder={"Email"}
          title={"Email"}
          text={email}
          setText={setEmail}
          attribute={{
            keyboardType: "email-address",
          }}
        />
        <Input
          placeholder={"Nama lengkap"}
          title={"Nama lengkap"}
          text={namaLengkap}
          setText={setNamaLengkap}
        />
        <Input
          placeholder={"Nomor whatsapp"}
          title={"Nomor whatsapp"}
          text={noWa}
          setText={setNoWa}
          attribute={{
            keyboardType: "number-pad",
          }}
        />
        <Input
          placeholder={"Password"}
          title={"Password"}
          text={password}
          setText={setPassword}
          attribute={{
            secureTextEntry: true,
          }}
        />
      </View>
      <View style={{ marginVertical: SIZES.medium }}>
        <FieldButton title={"Daftar"} onPress={submitHandler} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Daftar;
