import React, { useState } from "react";
import { View, ToastAndroid, FlatList, Pressable } from "react-native";
import * as ScureStore from "expo-secure-store";

import Input from "../../components/common/Input";
import { SIZES } from "../../styles";
import {
  FieldButton,
  FlatUnderlineButton,
} from "../../components/common/Button";
import { TextRegular } from "../../components/common/Text";
import API from "../../apis/apisProvider";
import OtpItem from "../../components/auth/OtpItem";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoadingIndicator from "../../components/common/LoadingIndicator";

const otpItem = [
  {
    name: "Email",
    icon: "mail",
  },
  {
    name: "Whatsapp",
    icon: "logo-whatsapp",
  },
  {
    name: "SMS",
    icon: "mail-open",
  },
  {
    name: "Missed Call",
    icon: "call",
  },
];

const LoginOwner = ({ navigation }) => {
  const [emailNoTelp, setEmailNoTelp] = useState("");
  const [password, setPassword] = useState("");
  const [choosenOtp, setChoosenOtp] = useState("Email");
  const [isLoading, setIsLoading] = useState(false);

  const validateInput = () => {
    if (emailNoTelp.length === 0 || password.length === 0) {
      return false;
    }
    return true;
  };

  const submitHandler = async () => {
    if (!validateInput()) return;

    setIsLoading(true);
    const response = await API.onLoginOwner({
      email: emailNoTelp,
      password: password,
    });
    setIsLoading(false);
    if (response?.data?.success === true) {
      await ScureStore.setItemAsync("TOKEN", response.data.data.token);
      if (response.data.data.data.is_have_outlet == 1) {
        navigation.replace("Products");
      } else {
        navigation.replace("TambahCabang");
      }
    } else if (
      response?.response?.status === 400 ||
      response?.response?.status === 404 ||
      response?.response?.status === 401
    ) {
      ToastAndroid.show(
        "Can't login, something went worng!",
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
      <Input
        placeholder={"Email atau no telepon"}
        title={"Email atau no telepon"}
        value={emailNoTelp}
        setValue={setEmailNoTelp}
      />
      <Input
        placeholder={"Password"}
        title={"Password"}
        value={password}
        setValue={setPassword}
        attribute={{
          secureTextEntry: true,
        }}
      />
      <View style={{ marginTop: SIZES.xSmall }}>
        <TextRegular text={"Send OTP"} style={{ fontWeight: "bold" }} />
        <View style={{ marginTop: SIZES.small }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={otpItem}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
              <Pressable onPress={() => setChoosenOtp(item.name)}>
                <OtpItem
                  item={item.name}
                  choosen={choosenOtp}
                  text={item.name}
                  icon={item.icon}
                />
              </Pressable>
            )}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.large }}>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <FieldButton
            title={"Masuk"}
            onPress={isLoading ? null : submitHandler}
          />
        )}

        <FlatUnderlineButton text={"Forgot password?"} isUnderline={true} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginOwner;
