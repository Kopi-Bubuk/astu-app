import React from 'react';
import { Text, Image } from 'react-native';

// Components
import Button from '../Button/Button.comp';
import Body from '../Body/Body.comp';
import Footer from '../Footer/Footer.comp';
import Container from '../Container/Container.comp';
import Title from '../Title/Title.comp';

// Styling
import color from '../../utils/Color';
import styles from './LostConnection.style';
import { useTranslation } from 'react-i18next';

// Image
const LostConnectionImage = require('../../assets/img/lost-connection.png');

const LostConnection = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<Body backgroundColor={color.white}>
				<Image source={LostConnectionImage} style={styles.image} />
				<Title text={t('component.lost_connection.body.title')} />
				<Text style={styles.desc}>
					{t('component.lost_connection.body.desc')}
				</Text>
			</Body>
			<Footer>
				<Button type={'primary'} label={t('component.lost_connection.footer.button')} />
			</Footer>
		</Container>
	);
};

export default LostConnection;
