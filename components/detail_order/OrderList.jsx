import { FlatList, View } from "react-native";
import OrderItem from "./OrderItem";

const OrderList = ({ dataOrder }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={dataOrder}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({ item }) => {
        return <OrderItem />;
      }}
    />
  );
};

export default OrderList;
