import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { SIZES } from "../../styles";

const HistoryTransaction = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Histori Transaksi",
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, padding: SIZES.medium }}>
      <Text>HistoryTransaction</Text>
    </View>
  );
};

export default HistoryTransaction;
