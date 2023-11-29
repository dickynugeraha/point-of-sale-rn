import Daftar from "../screens/auth/Daftar";
import LoginKaryawan from "../screens/auth/LoginKaryawan";
import LoginOwner from "../screens/auth/LoginOwner";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{
          title: "Daftar",
        }}
      />
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
    </Stack.Navigator>
  );
};

export default AuthNavigation;
