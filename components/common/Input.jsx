import { View, TextInput, StyleSheet } from "react-native";
import { TextRegular } from "./Text";
import { COLORS, SIZES } from "../../styles";

export default Input = ({ title, placeholder, text, setText, attribute }) => {
  return (
    <View style={styles.container}>
      <TextRegular text={title} />
      <TextInput
        placeholder={placeholder}
        value={text}
        onChangeText={(val) => setText(val)}
        style={styles.input}
        selectionColor={COLORS.TEXT_BLACK}
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
