import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SHADOWS } from "../../../styles";
import { Ionicons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";

const HeaderDashboard = () => {
  const [filterData, setFilterData] = React.useState("1");
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.boxInContainer}>
        {/* <TouchableOpacity style={styles.boxSetting}>
          <Ionicons name="arrow-down-sharp" size={16} />
        </TouchableOpacity> */}
        <Dropdown
          data={data}
          search
          labelField="label"
          valueField="value"
          onChange={(val) => {
            setFilterData(val);
          }}
        />
      </View>
      <View style={styles.boxInContainer}>
        <TouchableOpacity style={styles.boxSetting}>
          <Ionicons name="search" size={16} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxSetting}>
          <Ionicons name="card" size={16} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxSetting}>
          <Ionicons name="list" size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  boxInContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxSetting: {
    flex: 1,
    borderColor: COLORS.GREY_1_2,
    borderWidth: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HeaderDashboard;
