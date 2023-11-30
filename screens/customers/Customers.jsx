import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import CustomerList from "../../components/customers/CustomerList";
import { FieldButton } from "../../components/common/Button";

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const Customers = ({ navigation }) => {
  return (
    <>
      <View style={styles.boxInput}>
        <TextInput style={styles.input} placeholder="Cari.." right />
        <TouchableOpacity>
          <Ionicons name="search" size={20} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <CustomerList data={data} />
        <FieldButton
          title={"Tambah customer"}
          onPress={() => navigation.navigate("TambahCustomer")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  boxInput: {
    backgroundColor: COLORS.WHITE,
    padding: SIZES.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...SHADOWS.small,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.GREY_1_2,
    borderRadius: SIZES.xSmall,
    padding: 8,
    marginRight: 12,
  },
});

export default Customers;
