import React from "react";
import { FlatList, Text, View } from "react-native";
import DiskonItem from "../../components/diskon/DiskonItem";
import { SIZES } from "../../styles";

data = [
  {
    title: "Diskon akhir tahun",
    desc: "Diskon khusus diberikan untuk merayakan akhir tahun bersama orang terdekat",
    percentage: 30,
  },
  {
    title: "Diskon pengguna baru",
    desc: "Jangan khawatir, kamu akan mendapatkan potongan jika kamu adalah pengguna baru",
    percentage: 50,
  },
];

const Diskon = () => {
  return (
    <View style={{ flex: 1, padding: SIZES.medium }}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <DiskonItem
            desc={item.desc}
            title={item.title}
            percentage={item.percentage}
          />
        )}
      />
    </View>
  );
};

export default Diskon;
