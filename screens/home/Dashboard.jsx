import React, { useEffect, useLayoutEffect } from "react";
import { Alert, BackHandler, View } from "react-native";
import CardList from "../../components/home/card/CardList";
import { SIZES } from "../../styles";
import InfoCart from "../../components/home/info_cart/InfoCart";
import { useFocusEffect } from "@react-navigation/native";

const Dashboard = ({ navigation, route }) => {
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerBackVisible: false,
  //   });
  // }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === "Dashboard" || route.name === "Welcome") {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel",
            },
            { text: "YES", onPress: () => BackHandler.exitApp() },
          ]);
          return true;
        } else {
          return false;
        }
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <CardList />
      <View style={{ marginHorizontal: SIZES.large }}>
        <InfoCart onPress={() => navigation.navigate("DetailOrder")} />
      </View>
    </View>
  );
};

export default Dashboard;
