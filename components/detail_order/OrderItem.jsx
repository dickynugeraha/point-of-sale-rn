import { View, StyleSheet } from "react-native";
import { TextRegular } from "../common/Text";
import { FieldButton } from "../common/Button";
import { COLORS, SIZES } from "../../styles";

const OrderItem = () => {
  return (
    <View style={styles.itemOrder}>
      <View style={styles.titleOrder}>
        <FieldButton onPress={null} title={"1x"} style={{ marginRight: 12 }} />
        <TextRegular text={"Custom order"} />
      </View>
      <View>
        <TextRegular text={"Rp. 10.000"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SIZES.medium,
    backgroundColor: COLORS.WHITE,
  },
  itemOrder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.xSmall,
    borderBottomWidth: 1,
    borderColor: COLORS.GREY_1_2,
  },
  titleOrder: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default OrderItem;
