import React from "react";
import { FlatList, RefreshControl, View } from "react-native";
import CardItem from "./CardItem";
import { SIZES } from "../../../styles";
import HeaderDashboard from "../header/HeaderDashboard";

const CardList = ({ onRefresh, isLoading, data }) => {
  const dataDummy = [1, 2, 3];

  return (
    <FlatList
      data={data}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
      keyExtractor={(_, index) => index.toString()}
      numColumns={2}
      renderItem={({ item }) => {
        return <CardItem prod={item} />;
      }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <HeaderDashboard />}
      ListFooterComponent={() => <View style={{ height: 65 }}></View>}
    />
  );
};

export default CardList;
