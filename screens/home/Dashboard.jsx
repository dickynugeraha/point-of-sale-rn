import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import CardList from "../../components/home/card/CardList";
import { SIZES } from "../../styles";
import InfoCart from "../../components/home/info_cart/InfoCart";
import { Ionicons } from "@expo/vector-icons";

const Dashboard = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        // paddingBottom: 55,
      }}
    >
      <CardList />
      <View style={{ marginHorizontal: SIZES.large }}>
        <InfoCart onPress={() => navigation.navigate("DetailOrder")} />
      </View>
    </View>
  );
};

export default Dashboard;
