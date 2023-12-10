import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { TextBoldPrimary, TextRegular } from "../../components/common/Text";
import { COLORS, SIZES, images } from "../../styles";
import icons from "../../styles/icons";
import { FieldButton } from "../../components/common/Button";

const widthDevice = Dimensions.get("window").width;

const WelcomeScreen = ({ navigation }) => {
  React.useEffect(() => {
    const getTokenAvailable = async () => {
      const token = await SecureStore.getItemAsync("TOKEN");
      if (token !== null) {
        return navigation.replace("Home");
      }
    };
    getTokenAvailable();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxHeader}>
        <Image
          resizeMode="contain"
          source={icons.welcome}
          style={{ marginRight: SIZES.medium }}
        />
        <TextBoldPrimary text="APLIKASI" />
      </View>
      <Text style={styles.textWelcome_1}>Welcome to APLIKASI</Text>
      <TextRegular text="Pilih login sebagai owner atau karyawan untuk melanjutkan" />
      <View style={styles.boxImage}>
        <Image
          source={images.welcome}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <TextRegular
        text="Semua kebutuhan tokomu."
        style={{ textAlign: "center", fontWeight: "bold" }}
      />
      <View>
        <FieldButton
          onPress={() => navigation.navigate("Daftar")}
          title={"Buat akun"}
          style={{ marginVertical: SIZES.small }}
        />
        <TextRegular text={"Atau"} style={{ textAlign: "center" }} />
        {/* <View style={{ flexDirection: "row" }}> */}
        <FieldButton
          onPress={() => navigation.navigate("LoginOwner")}
          icon={icons.person}
          title={"Masuk sebagai owner"}
          style={{ marginTop: SIZES.small }}
          // style={{ marginTop: SIZES.small, flex: 1, marginRight: 5 }}
        />
        <FieldButton
          onPress={() => navigation.navigate("LoginKaryawan")}
          icon={icons.persons}
          title={"Masuk sebagai karyawan"}
          style={{ marginTop: SIZES.small }}
          // style={{ marginTop: SIZES.small, flex: 1, marginLeft: 5 }}
        />
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    flex: 1,
  },
  boxHeader: {
    marginVertical: SIZES.xxLarge,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textWelcome_1: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.TEXT_BLACK_2,
    marginBottom: SIZES.small,
  },
  boxImage: {
    marginVertical: SIZES.xLarge,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: widthDevice * 0.6,
    height: widthDevice * 0.6,
  },
});

export default WelcomeScreen;
