import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLORS, SIZES } from "../styles";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import Daftar from "../screens/auth/Daftar";
import LoginOwner from "../screens/auth/LoginOwner";
import LoginKaryawan from "../screens/auth/LoginKaryawan";
import TambahCabang from "../screens/cabang/TambahCabang";
import TambahKategori from "../screens/cabang/TambahKategori";
import TambahVariasiHarga from "../screens/cabang/TambahVariasiHarga";
import Dashboard from "../screens/home/Dashboard";
import { Ionicons } from "@expo/vector-icons";
import Favorites from "../screens/home/Favorites";
import DetailOrder from "../screens/detail_order/DetailOrder";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const styleHeader = {
  headerTitleStyle: {
    fontFamily: "DMMedium",
    color: COLORS.TEXT_PRIMARY,
  },
  headerTitleAlign: "center",
  headerTintColor: COLORS.TEXT_PRIMARY,
};

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, ...styleHeader }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation = () => {
  const [fontLoaded] = useFonts({
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <ActivityIndicator color="blue" size={SIZES.xLarge} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...styleHeader,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Group>
          <Stack.Screen name="Daftar" component={Daftar} />
          <Stack.Screen
            name="LoginOwner"
            component={LoginOwner}
            options={{
              title: "Masuk Owner",
            }}
          />
          <Stack.Screen
            name="LoginKaryawan"
            component={LoginKaryawan}
            options={{
              title: "Masuk Karyawan",
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="TambahCabang" component={TambahCabang} />
          <Stack.Screen name="TambahKategori" component={TambahKategori} />
          <Stack.Screen
            name="TambahVariasiHarga"
            component={TambahVariasiHarga}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
        <Stack.Screen name="DetailOrder" component={DetailOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
