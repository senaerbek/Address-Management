import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 2,
    alignItems: 'center',
  },
  infoContainer: {
    flex: 3,
  },
  cityDetailContainer: {
    flex: 3,
    alignItems: 'center',
  },
  navigationIconContainer: {
    flex: 1,
  },
  iconCircle: {
    backgroundColor: '#F1EEF7',
    borderRadius: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: {
    width: 20,
    height: 20,
    fill: '#450D87',
    stroke: '#450D87',
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  infoDetail: {
    fontSize: 12,
    fontWeight: '300',
    color: '#6F6085',
  },
  cityDetail: {
    fontSize: 12,
    fontWeight: '300',
    color: '#3D2852',
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
});
