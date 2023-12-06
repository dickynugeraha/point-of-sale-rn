import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import CustomerList from "../../components/customers/CustomerList";
import { FieldButton } from "../../components/common/Button";
import Search from "../../components/common/Search";

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const Customers = ({ navigation }) => {
  const [textSearch, setTextSearch] = useState("");

  const searchSubmitHandler = () => {
    console.log(textSearch);
  };

  return (
    <>
      <Search
        placeholder="Cari customer.."
        setText={setTextSearch}
        onPress={searchSubmitHandler}
      />
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <CustomerList data={data} onPress={() => navigation.goBack()} />
        <FieldButton
          title={"Tambah customer"}
          onPress={() => navigation.navigate("TambahCustomer")}
        />
      </View>
    </>
  );
};

export default Customers;
