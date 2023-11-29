import { createContext, useState } from "react";
import * as ScureStore from "expo-secure-store";

export const AuthContext = createContext({
  onLogin: () => {},
  onLogout: () => {},
  isLoggedin: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const onLogin = (token, userInfo) => {
    setIsLoading(true);
    setToken(token);
    setUserInfo(userInfo);
    ScureStore.setItemAsync("TOKEN", token);
    ScureStore.setItemAsync("USER_INFO", userInfo);
    setIsLoading(false);
  };

  const onLogout = (token, userInfo) => {
    setIsLoading(true);
    setToken(token);
    setUserInfo(userInfo);
    ScureStore.setItemAsync("TOKEN", token);
    ScureStore.setItemAsync("USER_INFO", userInfo);
    setIsLoading(false);
  };

  const isLoggedin = async () => {
    try {
      setIsLoading(true);
      let token = ScureStore.getItemAsync("TOKEN");
      let userInfo = ScureStore.getItemAsync("USER_INFO");
      setToken(token);
      setUserInfo(userInfo);
      setIsLoading(false);
    } catch (error) {
      console.log("ERROR AUTH ==== ", error);
    }
  };

  useEffect(() => {
    isLoggedin();
  }, []);

  const value = {
    onLogin,
    onLogout,
    isLoggedin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
