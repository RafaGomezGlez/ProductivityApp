import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: width / 1.3,
    padding: 10,
  },
  inputContainer: {
    marginVertical: 30,
  },
});

export {styles};