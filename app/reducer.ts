const reducer = (state: any, action: any) => {
  const { type } = action;

  switch (type) {
    case 'NOTIFICATION_ERROR_WEAK_PIN':
      return {
        showNotification: true,
        notificationText: 'PIN Terlalu Lemah, Mohon Diganti',
        notificationType: 'error',
      };
		case 'NOTIFICATION_ERROR_COPY_EMPTY':
			return {
				showNotification: true,
				notificationText: 'Tidak terdapat data yang dicopy!',
				notificationType: 'error',
			};
    case 'NOTIFICATION_ERROR_UNMATCHED_PIN':
      return {
        showNotification: true,
        notificationText: 'PIN Tidak Sesuai, Mohon Diperiksa',
        notificationType: 'error',
      };
		case 'NOTIFICATION_ERROR_NOT_NEW_PIN':
			return {
				showNotification: true,
				notificationText: 'PIN Baru Sama Dengan PIN Lama',
				notificationType: 'error',
			};
    case 'NOTIFICATION_SUCCESS_COPY':
      return {
        showNotification: true,
        notificationText: 'Secret Phrase Berhasil Dicopy!',
        notificationType: 'success',
      };
    case 'NOTIFICATION_ADDRESS_SUCCESS_COPY':
      return {
				...state,
        showNotification: true,
        notificationText: 'Wallet Address Berhasil Dicopy!',
        notificationType: 'success',
      };
		case 'NOTIFICATION_SUCCESS_CHANGE_LANGUAGE':
			return {
				showNotification: true,
				notificationText: 'Bahasa Berhasil Diubah!',
				notificationType: 'success',
			};
		case 'TRANSACTION_ID_COPY':
			return {
				...state,
				showNotification: true,
				notificationText: 'ID Transaksi Berhasil Dicopy!',
				notificationType: 'success',
			};
    case 'REMOVE_NOTIFICATION':
      return {
				...state,
        showNotification: false,
      };
    case 'READ_PRIVACY_POLICY':
      return {
        ...state,
        isPrivacyPolicyRead: true,
      };
    case 'READ_TERMS_CONDITION':
      return {
        ...state,
        isTermsConditionRead: true,
      };
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'IS_SUCCESS':
      return {
        ...state,
        isLoading: false,
      };
    case 'SET_USER_BALANCE_DATA':
      return {
        ...state,
        IDRBalance: action.data.IDRBalance,
				ETHTotalBalance: action.data.ETHTotalBalance,
				ETHRates: action.data.ETHRates,
				CurrentAddress: action.data.CurrentAddress
      };
		case 'SET_ETH_TOTAL_BALANCE':
			return {
				...state,
				ETHTotalBalance: action.data.ETHTotalBalance,
			};
		case 'SET_ETH_IDR_RATES':
			return {
				...state,
				ETHRates: action.data.ETHRates,
			};
		case 'SET_CURRENT_ADDRESS':
			return {
				...state,
				CurrentAddress: action.data.CurrentAddress,
			};
    case 'ADD_FAVORITE':
      return {
        showNotification: true,
        notificationText: 'NFT Berhasil ditambahkan ke favorit!',
        notificationType: 'success',
      };
		case 'NFT_IMPORT_SUCCESS':
			return {
				showNotification: true,
				notificationText: 'NFT berhasil diimport ke wallet!',
				notificationType: 'success',
			};
		case 'SET_PATIENT_DATA':
			return {
				...state,
				patientData: action.data,
			};
    default:
      return state;
  }
};

export default reducer;
