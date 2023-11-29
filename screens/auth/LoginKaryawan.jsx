import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "../../components/common/Input";
import { COLORS, SIZES } from "../../styles";
import { FieldButton } from "../../components/common/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginKaryawan = () => {
  const [kodeKasir, setKodeKasir] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAwareScrollView
      keyboardshouldpersisttaps={"always"}
      style={{ flex: 1, padding: SIZES.medium }}
      showsverticalscrollindicator={false}
    >
      <View>
        <Input
          placeholder={"Kode kasir"}
          title={"Kode kasir"}
          text={kodeKasir}
          setText={setKodeKasir}
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
        <View style={styles.boxInfo}>
          <Text>
            Gunakan kode kasir yang dapat dibuat oleh Owner di{" "}
            <Text style={{ fontWeight: "bold" }}>
              Manajemen Toko -{">"} Kode Kasir
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ marginVertical: SIZES.large }}>
        <FieldButton title={"Masuk"} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  boxInfo: {
    marginTop: SIZES.xSmall,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.SOFT_BLUE,
  },
});

export default LoginKaryawan;
