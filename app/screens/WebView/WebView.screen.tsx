import React, { useState, useRef, RefObject } from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import Pdf from 'react-native-pdf';

// Components
import Container from '../../components/Container/Container.comp';
import AppHeader from '../../components/AppHeader/AppHeader.comp';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar.comp';

// Helper
import color from '../../utils/Color';
import {scaleHeight, windowHeight} from '../../utils/Scale';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import {truncateString} from "../../utils/Helper";

const goBack = (navigation: NavigationHelpers<ParamListBase>) => () => navigation.goBack();

const getRedirectUrl = (redirect_url: string, setUrl: Function, ref: RefObject<any>) => (
	<WebView
		ref={ref}
		javaScriptEnabledAndroid={true}
		javaScriptEnabled={true}
		domStorageEnabled={true}
		source={{ uri: redirect_url }}
		onShouldStartLoadWithRequest={(request) => {
			const { url } = request;
			if (url.includes('.pdf')) {
				setUrl(url);
				return false;
			} else {
				return true;
			}
		}}
	/>
);

const renderPdfView = (uri: string | null) => {
	return (
		uri && <Pdf
			trustAllCerts={false}
			source={{ uri, cache: true }}
			style={{
				height: Platform.OS === 'ios' ? windowHeight() - scaleHeight(100) : windowHeight(),
				width: '100%'
		}}
		/>
	);
}

const WebViewScreen = ({ navigation, route }: any) => {
	const [url, setUrl] = useState(null);
  const { redirect_url, webview_title } = route.params;
	const webRef = useRef(null);

  return (
		<Container backgroundColor={color.white} isWebView={true}>
			<CustomStatusBar />
			<AppHeader
				navigation={navigation}
				route={webview_title}
				title={truncateString(webview_title, 24)}
				onBackButtonPress={goBack(navigation)}
				params={{
					screen: 'Profile'
				}}
			/>
			{renderPdfView(url)}
			{url === null && getRedirectUrl(redirect_url, setUrl, webRef)}
		</Container>
  );
};

export default WebViewScreen;
