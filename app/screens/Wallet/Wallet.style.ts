import { StyleSheet } from 'react-native';
import color from '../../utils/Color';
import {scaleFont, scaleHeight, scaleSize, scaleWidth, windowWidth} from '../../utils/Scale';

const styles = StyleSheet.create({
  container: {
    height: 'auto',
		paddingBottom: 100
  },
  header: {
    backgroundColor: color.black,
    marginBottom: scaleHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: scaleHeight(12),
    paddingBottom: scaleHeight(0),
  },
  headerAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(20),
    marginTop: scaleHeight(20),
  },
  amount: {
    fontSize: scaleFont(28),
    fontWeight: 'bold',
    color: color.white,
  },
  amountLabel: {
    fontSize: scaleFont(13.5),
    marginBottom: scaleHeight(10),
    color: color.white,
  },
  body: {
    paddingHorizontal: scaleWidth(20),
  },
  bodyContentLabel: {
    color: color.grey,
    fontSize: scaleFont(12),
    marginBottom: scaleHeight(15),
  },
  emptyState: {
    marginTop: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateImg: {
    width: scaleWidth(200),
    height: scaleHeight(200),
    resizeMode: 'contain',
  },
  emptyStateLabel: {
    color: color.grey,
    textAlign: 'center',
    fontSize: scaleFont(15),
    marginTop: scaleHeight(20),
    width: scaleWidth(240),
    lineHeight: scaleFont(24),
  },
	greeting: {
		color: color.grey,
		marginTop: scaleHeight(20),
		marginBottom: scaleHeight(5),
		fontSize: scaleFont(18)
	},
	greetingName: {
		color: color.grey,
		fontSize: scaleFont(21),
		fontWeight: 'bold',
		marginBottom: scaleHeight(15)
	},
	buttonMeasure: {
		width: '100%',
		backgroundColor: 'pink',
		padding: scaleSize(16),
		borderRadius: 12,
	},
	buttonMeasureText: {
		color: color.black,
		textAlign: 'center',
		fontSize: scaleFont(15),
		fontWeight: '600',
		marginTop: scaleSize(20),
		backgroundColor: color.white,
		padding: scaleSize(16),
		borderRadius: 12,
		overflow: 'hidden'
	},
	buttonSeePatient: {
		width: '100%',
		backgroundColor: color.mainBlue,
		padding: scaleSize(16),
		borderRadius: 12,
		marginTop: scaleHeight(15)
	},
	buttonSeePatientText: {
		color: color.white,
		textAlign: 'center',
		fontSize: scaleFont(15),
		fontWeight: '600'
	},
	boxStats: {
		fontSize: scaleFont(12),
		padding: 20,
		color: color.black,
		backgroundColor: color.white,
		borderRadius: 12,
		overflow: 'hidden',
		width: windowWidth() / 3 - scaleWidth(21),
		height: scaleHeight(108),
		borderWidth: 1,
		borderColor: color.borderGrey,
		marginBottom: scaleHeight(12),
		marginRight: scaleWidth(12),
		alignItems: 'center',
		justifyContent: 'center'
	},
	boxStatsAlert: {
		fontSize: scaleFont(12),
		padding: 20,
		color: color.black,
		backgroundColor: color.red,
		borderRadius: 12,
		overflow: 'hidden',
		width: windowWidth() / 3 - scaleWidth(21),
		height: scaleHeight(108),
		borderWidth: 1,
		borderColor: color.borderGrey,
		marginBottom: scaleHeight(12),
		marginRight: scaleWidth(12),
		alignItems: 'center',
		justifyContent: 'center'
	},
	boxStatsCounter: {
		fontSize: scaleFont(21),
		fontWeight: '600',
		textAlign: 'center',
		marginBottom: scaleHeight(3)
	},
	boxStatsCounterAlert: {
		fontSize: scaleFont(21),
		fontWeight: '600',
		textAlign: 'center',
		marginBottom: scaleHeight(3),
		color: 'white'
	},
	boxStatsLabel: {
		fontSize: scaleFont(12),
		textAlign: 'center'
	},
	boxStatsLabelAlert: {
		color: 'white',
		fontSize: scaleFont(12),
		textAlign: 'center'
	},
	statusPatient: {
		color: color.grey,
		fontSize: scaleFont(18),
		marginBottom: scaleHeight(12)
	}
});

export default styles;
