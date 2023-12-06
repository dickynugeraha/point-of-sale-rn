import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SIZES, images } from "../../styles";
import { TextRegular, TextBoldPrimary, TextSmall } from "../common/Text";

const Profile = () => {
  return (
    <View style={styles.containerImage}>
      <Image style={styles.image} source={images.profile} resizeMode="cover" />
      <View>
        <TextRegular text={"Dicky Nugeraha"} style={{ marginBottom: 8 }} />
        <TextSmall text={"012025171541"} />
        <TextSmall text={"dicky@gmail.com"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: SIZES.medium,
    borderRadius: 40,
  },
});

export default Profile;
