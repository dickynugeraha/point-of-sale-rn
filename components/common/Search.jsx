import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../styles";

const Search = ({ onPress, placeholder, setText }) => {
  return (
    <View style={styles.boxInput}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => setText(text)}
      />
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="search" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boxInput: {
    backgroundColor: COLORS.WHITE,
    padding: SIZES.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...SHADOWS.small,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.GREY_1_2,
    borderRadius: SIZES.xSmall,
    padding: 8,
    marginRight: 12,
  },
});

export default Search;
