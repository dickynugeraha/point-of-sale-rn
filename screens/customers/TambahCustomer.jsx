import React, { useLayoutEffect, useState } from "react";
import { ActivityIndicator, ToastAndroid, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as SecureStore from "expo-secure-store";
import { SIZES } from "../../styles";
import Input from "../../components/common/Input";
import { FieldButton } from "../../components/common/Button";
import API from "../../apis/apisProvider";

const TambahCustomer = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Tambah Cabang",
    });
  }, [navigation]);

  const addCustomerHandler = async () => {
    const token = await SecureStore.getItemAsync("TOKEN");
    setIsLoading(true);
    const response = await API.addCustomer(
      {
        outlet_code: "OUTLET-0001",
        name: name,
        phone_number: phone,
        email: email,
        address: address,
      },
      token
    );
    setIsLoading(false);
    if (response.success === true) {
      ToastAndroid.show(response.message, ToastAndroid.BOTTOM);
    } else {
      ToastAndroid.show(
        "Oops, cannot add cusomer, something worng!",
        ToastAndroid.BOTTOM
      );
    }
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <KeyboardAwareScrollView
      keyboardshouldpersisttaps={"always"}
      style={{ flex: 1, padding: SIZES.medium }}
      showsverticalscrollindicator={false}
    >
      <Input
        title={"Nama"}
        placeholder={"Contoh: budiman"}
        value={name}
        setValue={setName}
      />
      <Input
        title={"No telepon"}
        placeholder={"Contoh: 082154458124"}
        value={phone}
        setValue={setPhone}
        attribute={{ keyboardType: "number-pad" }}
      />
      <Input
        title={"Email"}
        placeholder={"Contoh: budiman@gmail.com"}
        value={email}
        setValue={setEmail}
        attribute={{ keyboardType: "email-address" }}
      />
      <Input
        title={"Alamat"}
        placeholder={"Contoh: jl. badawasa"}
        value={address}
        setValue={setAddress}
        attribute={{ multiline: true, numberOfLines: 4 }}
      />
      <View style={{ marginVertical: SIZES.small }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FieldButton title={"Tambah customer"} onPress={addCustomerHandler} />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default TambahCustomer;
