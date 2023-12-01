import React, { useLayoutEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FieldButton } from "../../components/common/Button";
import { COLORS, SIZES } from "../../styles";
import { TextRegular } from "../../components/common/Text";
import OtpItem from "../../components/auth/OtpItem";
import OrderList from "../../components/detail_order/OrderList";

const deviceHight = Dimensions.get("window").height;
const typeOfEating = ["Ambil sendiri", "Antar", "Makan ditempat"];
const dataOrder = [1, 1, 1, 1, 1, 1, 1, 1, 1];

const DetailOrder = ({ navigation }) => {
  const [typeEating, setTypeEating] = useState("Antar");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Detail Order",
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <Pressable
        style={styles.customerBox}
        onPress={() => navigation.navigate("Customers")}
      >
        <TextRegular text={"Customer"} />
        <Ionicons name="arrow-forward" size={20} />
      </Pressable>
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <View>
          <FlatList
            data={typeOfEating}
            key={(_, index) => index.toString()}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setTypeEating(item)}>
                <OtpItem text={item} choosen={typeEating} item={item} />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ marginTop: SIZES.small, maxHeight: deviceHight * 0.45 }}>
          <OrderList dataOrder={dataOrder} />
        </View>
        <Pressable
          style={[
            styles.customerBox,
            { backgroundColor: "transparent", paddingHorizontal: 0 },
          ]}
          onPress={()=>navigation.navigate("Diskon")}
        >
          <TextRegular text={"Diskon"} />
          <Ionicons name="arrow-forward" size={20} />
        </Pressable>
        <View
          style={[
            styles.customerBox,
            { backgroundColor: "transparent", paddingHorizontal: 0 },
          ]}
        >
          <TextRegular text={"Subtotal"} />
          <TextRegular text={"Rp. 100.000"} />
        </View>
        <TouchableOpacity style={styles.deleteBox}>
          <Ionicons name="trash" size={20} color={COLORS.TEXT_ERROR} />
          <TextRegular
            text={"Hapus order"}
            style={{ color: COLORS.TEXT_ERROR, marginLeft: 8 }}
          />
        </TouchableOpacity>
        <FieldButton title={"Selesaikan pesanan"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SIZES.small,
    backgroundColor: COLORS.WHITE,
  },
  deleteBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.medium,
  },
});

export default DetailOrder;
