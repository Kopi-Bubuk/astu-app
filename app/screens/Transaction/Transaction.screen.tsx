import React, {useEffect, useState} from 'react';
import {
	TouchableOpacity,
	Text,
	View,
	Image, FlatList
} from 'react-native';

// styles
import color from '../../utils/Color';
import styles from './Transaction.style';

// components
import Container from '../../components/Container/Container.comp';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar.comp';
import AppHeader from '../../components/AppHeader/AppHeader.comp';
import Body from '../../components/Body/Body.comp';

// Navigation Types
import type { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import {get} from "../../hooks/useApi";

const NewsItem = (
	{
		url,
		image,
		title,
		desc,
		source,
		date,
		navigation
	}
) => (
	<TouchableOpacity
		onPress={() => navigation.navigate('WebView', { redirect_url: url, webview_title: title })}
		style={{
		borderColor: color.borderGrey,
		marginTop: 20,
		backgroundColor: 'white',
		maxWidth: '100%',
		borderRadius: 10,
		overflow: 'hidden'
	}}>
		<Image
			source={{
			uri: image
		}}
		style={{
			width: '100%',
			height: 140,
			marginRight: 10
		}}
		/>
		<View style={{
			padding: 20
		}}>
			<View style={{
				flexDirection: 'row',
				marginBottom: 5
			}}>
				<Text>
					{date}
				</Text>
				<Text style={{
					marginHorizontal: 5
				}}>
					-
				</Text>
				<Text>
					{source}
				</Text>
			</View>
			<Text style={{
				fontWeight: 'bold',
				marginBottom: 5,
			}}>
				{title}
			</Text>
			{desc && <Text>{desc}</Text>}
		</View>
	</TouchableOpacity>
);

const loadMore = (newsCount, setNewsCounter) => () => {
	setNewsCounter(newsCount + 5);
	console.log(newsCount);
}

export const Transaction: React.FC<{
  navigation: NavigationHelpers<ParamListBase>;
}> = ({ navigation }) => {
	const [articles, setArticleData] = useState([]);
	const [newsCount, setNewsCounter] = useState(10);

	useEffect(() => {
		get(`getNews?nrows=${newsCount}`, { type: 'news' }).then(result => {
			setArticleData(result);
		});
	}, [articles]);

	const renderItem = ({ item }) => {
		return (
			<NewsItem
				url={item.link}
				image={item.image}
				title={item.judul}
				date={item.tgl.substring(0, 10)}
				source={item.nama}
				navigation={navigation}
			/>
		)
	};

  return (
    <Container backgroundColor={color.backgroundGrey}>
      <CustomStatusBar />
      <AppHeader
        navigation={navigation}
        route={'Home'}
        title={'Artikel'} />
      <Body type={'fullscreen'} align={'flex-start'} height={'full'}>
				<FlatList
					onEndReached={loadMore(newsCount, setNewsCounter)}
					data={articles}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
      </Body>
    </Container>
  );
};

export default Transaction;
