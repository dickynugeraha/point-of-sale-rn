import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
import Customers from "../screens/customers/Customers";
import TambahCustomer from "../screens/customers/TambahCustomer";
import Diskon from "../screens/diskon/Diskon";
import Kasir from "../screens/home/Kasir";
import HistoryTransaction from "../screens/history_transaction/HistoryTransaction";
import Account from "../screens/account/Account";

const Drawer = createDrawerNavigator();
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

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        ...styleHeader,
      }}
    >
      <Drawer.Screen
        name="Kasir"
        component={HomeTabs}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calculator" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="HistoryTransaction"
        component={HistoryTransaction}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="time-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Akun"
        component={Account}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, ...styleHeader }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="AddNewMenu"
        component={Kasir}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="add-circle" size={size} color={color} />;
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
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="blue" size={SIZES.xLarge} />
      </View>
    );
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
            component={MainDrawer}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
        <Stack.Screen name="DetailOrder" component={DetailOrder} />
        <Stack.Group>
          <Stack.Screen name="Customers" component={Customers} />
          <Stack.Screen name="TambahCustomer" component={TambahCustomer} />
        </Stack.Group>
        <Stack.Screen name="Diskon" component={Diskon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
