import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextRegular } from "../common/Text";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../styles";

const CustomerList = ({ data }) => {
  const CustomerItem = (item) => {
    return (
      <TouchableOpacity style={styles.boxCustomerItem}>
        <TextRegular text="Customer" />
        <Ionicons name="arrow-forward" size={20} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CustomerItem />}
        keyExtractor={(item, index) => index.toString()}
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
