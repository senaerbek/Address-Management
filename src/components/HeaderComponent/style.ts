import {StyleSheet} from 'react-native';

export const gradientColors = ['#220C45', '#440E85'];
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 180,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconView: {
    flex: 1,
    alignItems: 'flex-start',
  },
  titleView: {
    flex: 2,
    alignItems: 'center',
  },
  childrenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  title: {
    color: '#C2BBCF',
    fontSize: 16,
    fontWeight: '300',
  },
  languageIconView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  iconStyle: {
    width: 10,
    height: 10,
    fill: '#C2BBCF',
    stroke: '#C2BBCF',
    strokeWidth: 1.66667,
  },
});
