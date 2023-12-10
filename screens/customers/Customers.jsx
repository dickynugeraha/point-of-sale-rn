import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import API from "../../apis/apisProvider";
import { SIZES } from "../../styles";
import CustomerList from "../../components/customers/CustomerList";
import { FieldButton } from "../../components/common/Button";
import Search from "../../components/common/Search";
import LoadingIndicator from "../../components/common/LoadingIndicator";

const Customers = ({ navigation }) => {
  const [textSearch, setTextSearch] = useState("");
  const [dataCustomer, setDataCustomer] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCustomerHandler = async () => {
    const response = await API.getCustomers();
    setIsLoading(false);
    if (response?.data?.length != 0) {
      setDataCustomer(response.data);
      setDataFiltered(response.data);
    }
  };

  useEffect(() => {
    fetchCustomerHandler();
  }, []);

  const searchSubmitHandler = () => {
    const filteredData = dataCustomer.filter((customer) =>
      customer.name.toLowerCase().includes(textSearch.toLowerCase())
    );
    setDataFiltered(filteredData);
  };

  return (
    <>
      <Search
        placeholder="Cari customer.."
        setText={setTextSearch}
        onPress={searchSubmitHandler}
      />
      <View style={{ flex: 1, padding: SIZES.medium }}>
        {isLoading === true ? (
          <LoadingIndicator />
        ) : (
          <>
            <CustomerList
              data={dataFiltered}
              onClickCustomer={() => navigation.goBack()}
              isLoading={isLoading}
              onRefresh={fetchCustomerHandler}
            />
            <FieldButton
              title={"Tambah customer"}
              onPress={() => navigation.navigate("TambahCustomer")}
            />
          </>
        )}
      </View>
    </>
  );
};

export default Customers;
