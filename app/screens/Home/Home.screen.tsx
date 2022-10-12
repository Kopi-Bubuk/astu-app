import React, { useContext, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';

// Screens
import TransactionScreen from '../Transaction/Transaction.screen';
import WalletScreen from '../Wallet/Wallet.screen';
import NFTListScreen from '../NFTList/NFTList.screen';

// Styling & Icon
import color from '../../utils/Color';
import styles from './Home.style';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/fontello/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

// Library
import DataContext from "../../stores/Provider";
import { useTranslation } from "react-i18next";
import { tabTestID } from '../../utils/Native';

const Tab = createBottomTabNavigator();

type RouteProps = {
	route: {
		name: string;
	};
};

const Home = ({ route }: RouteProps) => {
	const {
		isShowBackgroundMask
	} = useContext(DataContext);
	const { t } = useTranslation();

	useEffect(() => {
		CommonActions.reset({
			index: 0,
			routes: [{ name: 'Home' }]
		});
	}, [isShowBackgroundMask]);

	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarIcon: ({ focused }) => {
						let iconName;
						if (route.name === 'Wallet') {
							iconName = 'star-fill';
						} else if (route.name === 'Profile') {
							iconName = 'user';
						} else if (route.name === 'Transaction'){
							iconName = 'transaction';
						} else {
							iconName = 'nft'
						}
						return (
							<Icon
								name={iconName}
								color={focused ? 'pink' : color.grey}
								size={18}
								style={styles.bottomSheetIcon}
							/>
						);
					},
					tabBarStyle: styles.tabBarStyle,
					tabBarItemStyle: styles.tabBarItemStyle,
					tabBarLabelStyle: styles.tabBarLabelStyle,
				})}>
				<Tab.Screen
					name="Wallet"
					component={WalletScreen}
					options={{
						title: 'Home'
					}}
				/>
				<Tab.Screen
        		name="NFT"
        		component={NFTListScreen}
        		options={{
        		title: 'Pasien',
        		...tabTestID('home_home_tab_nft')
        	}}
        />
				<Tab.Screen
					name="Transaction"
					component={TransactionScreen}
					options={{
						title: 'Artikel',
						...tabTestID('home_home_tab_transaction'),
					}}
				/>
			</Tab.Navigator>
		</KeyboardAvoidingView>
	);
};

export default Home;
