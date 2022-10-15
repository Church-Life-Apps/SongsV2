import { View, Text, StyleSheet } from "react-native";

const SampleContent = () => {
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default SampleContent;
