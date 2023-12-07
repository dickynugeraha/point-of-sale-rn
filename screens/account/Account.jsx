import React from "react";
import { View } from "react-native";
import * as SecureStorage from "expo-secure-store";
import { StackActions } from "@react-navigation/native";

import { SIZES } from "../../styles";
import ButtonLogout from "../../components/profile/ButtonLogout";
import Profile from "../../components/profile/Profile";

const Account = ({ navigation }) => {
  const logoutHandler = async () => {
    const token = await SecureStorage.isAvailableAsync("TOKEN");
    if (token === true) {
      await SecureStorage.deleteItemAsync("TOKEN");

      navigation.dispatch(StackActions.replace("Welcome"));
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: SIZES.medium,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Profile />
      </View>
      <View>
        <ButtonLogout onPress={logoutHandler} />
      </View>
    </View>
  );
};

export default Account;
