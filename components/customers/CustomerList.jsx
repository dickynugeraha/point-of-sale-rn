import React from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { TextRegular } from "../common/Text";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../styles";

const CustomerList = ({ data, onClickCustomer, isLoading, onRefresh }) => {
  const CustomerItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.boxCustomerItem}
        onPress={onClickCustomer}
      >
        <TextRegular text={item.name} />
        <Ionicons name="arrow-forward" size={20} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => <CustomerItem item={item} />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxCustomerItem: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: COLORS.GREY_1_2,
    borderBottomWidth: 1,
    marginBottom: SIZES.small,
  },
});

export default CustomerList;
