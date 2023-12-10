import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, Alert, BackHandler, View } from "react-native";
import * as SecureStorage from "expo-secure-store";

import CardList from "../../components/home/card/CardList";
import { COLORS, SIZES } from "../../styles";
import InfoCart from "../../components/home/info_cart/InfoCart";
import { useFocusEffect } from "@react-navigation/native";
import API from "../../apis/apisProvider";

const Dashboard = ({ navigation, route }) => {
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerBackVisible: false,
  //   });
  // }, [navigation]);

  const [dataProds, setDataProds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const token = await SecureStorage.getItemAsync("TOKEN");
    const response = await API.getAllProducts(token);
    if (response?.data.length > 0) {
      setDataProds(response.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      {isLoading === true ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size={24} color={COLORS.PRIMARY} />
        </View>
      ) : (
        <>
          {/* <CardList /> */}
          <CardList
            onRefresh={fetchData}
            isLoading={isLoading}
            data={dataProds}
          />
          <View style={{ marginHorizontal: SIZES.large }}>
            <InfoCart onPress={() => navigation.navigate("DetailOrder")} />
          </View>
        </>
      )}
    </View>
  );
};

export default Dashboard;
