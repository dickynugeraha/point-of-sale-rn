import React from "react";
import { FlatList, Text, View } from "react-native";
import CardItem from "./CardItem";
import { SIZES } from "../../../styles";
import HeaderDashboard from "../header/HeaderDashboard";

const CardList = () => {
  const data = [1, 2, 3, 3, 3, 3, 3, 3];

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      renderItem={(item) => <CardItem />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <HeaderDashboard />}
      ListFooterComponent={() => <View style={{ height: 65 }}></View>}
    />
  );
};

export default CardList;
