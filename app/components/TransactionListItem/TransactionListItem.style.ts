import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import {
  scaleFont,
  scaleHeight,
  scaleSize,
  scaleWidth,
} from '../../utils/Scale';

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.white,
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(20),
  },
  listNoBorder: {
    padding: scaleWidth(20),
  },
  leftBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(5),
    alignItems: 'center',
  },
  headerStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(5),
  },
  rightBar: {
    justifyContent: 'center',
  },
  amount: {
    textAlign: 'right',
    fontWeight: '600',
    fontSize: scaleFont(15),
    marginBottom: scaleHeight(3),
  },
  amountIDR: {
    textAlign: 'right',
    fontSize: scaleFont(12),
    color: color.grey,
  },
  token: {
    fontSize: scaleFont(15),
    color: color.black,
  },
  address: {
    marginTop: scaleHeight(10),
  },
  date: {
    color: color.grey,
    fontSize: scaleFont(12),
  },
  addressLabel: {
    fontSize: scaleFont(13.5),
  },
  addressText: {
    fontSize: scaleFont(13.5),
  },
  status: {
    borderWidth: 1,
    borderColor: color.orange,
    borderStyle: 'solid',
    color: color.orange,
    marginLeft: scaleWidth(7),
    paddingHorizontal: scaleWidth(7),
    paddingVertical: scaleHeight(3),
    borderRadius: scaleFont(10),
    fontSize: scaleFont(10),
  },
  dateSeparator: {
    width: scaleSize(3),
    height: scaleSize(3),
    borderRadius: scaleSize(3),
    backgroundColor: color.grey,
    marginHorizontal: scaleWidth(5),
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: scaleWidth(15),
    width: scaleWidth(32),
    height: scaleHeight(32),
    resizeMode: 'contain',
  },
});

export default styles;
