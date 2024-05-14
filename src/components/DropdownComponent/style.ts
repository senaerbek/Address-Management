import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dropdown: {
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FCFCFD',
    borderColor: '#E6E9EE',
    paddingHorizontal: 16,
    padding: 0,
  },
  labelContainer: {
    position: 'absolute',
    marginHorizontal: 16,
  },
  label: {
    fontSize: 14,
    color: '#6F6085',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
