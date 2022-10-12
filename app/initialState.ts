const initialState = {
	showNotification: false,
	isPrivacyPolicyRead: false,
	isTermsConditionRead: false,
	isLoading: false,
	IDRBalance: '0',
	ETHTotalBalance: 0,
	CurrentAddress: '',
	ETHRates: [{
		crypto: '',
		fiat: 0,
		value: 0
	}],
	dispatch: (type: any) => type,
	setBackgroundMask: () => {},
	setBottomSheetType: (type: string) => type,
	setNavigation: () => {},
	setBottomSheetContent: (props: any) => props,
	dismissBottomSheet: () => {},
	openBottomSheet: () => {},
	isShowBackgroundMask: false,
	bottomSheetRef: null,
	patientData: {
		id: '',
		birth_date_type: 'Diketahui',
		gender: 'Laki - Laki',
		oodema: 'Tidak Ada',
		name: '',
		weightForAgeScore: 0,
		lengthForAgeScore: 0,
		measure_type: 'Berdiri'
	}
};

export default initialState;
