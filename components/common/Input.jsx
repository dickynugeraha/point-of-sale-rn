import { View, TextInput, StyleSheet } from "react-native";
import { TextRegular } from "./Text";
import { COLORS, SIZES } from "../../styles";

export default Input = ({ title, placeholder, value, setValue, attribute }) => {
  return (
    <View style={styles.container}>
      <TextRegular text={title} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(val) => setValue(val)}
        style={styles.input}
        selectionColor={COLORS.GREY_2}
        {...attribute}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.small,
  },
  input: {
    marginTop: SIZES.small,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.GREY_1_2,
  },
});
