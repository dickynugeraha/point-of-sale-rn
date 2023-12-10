import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../../styles";

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={SIZES.xLarge} color={COLORS.PRIMARY} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingIndicator;
