import {StyleSheet, Dimensions} from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: .5,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginVertical: 80,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: width / 1.3,
    padding : 10,
  },
  inputTitle: {
    marginBottom: 5,
    marginTop: 5,
  }
});

export {styles};
