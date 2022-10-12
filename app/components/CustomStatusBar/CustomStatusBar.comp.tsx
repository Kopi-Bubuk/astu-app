import React from 'react';
import { StatusBar, View } from 'react-native';
import styles from './CustomStatusBar.comp.style';
import color from '../../utils/Color';

type CustomStatusBarProps = {
	isWebView?: boolean;
	backgroundColor?: string;
};

const CustomStatusBar: React.FC<CustomStatusBarProps> = (props) => (
  <View style={props.isWebView ? styles().statusBarWeb : styles(props.backgroundColor).statusBar}>
    <StatusBar
      translucent
      backgroundColor={props.backgroundColor ? props.backgroundColor : 'pink'}
      barStyle="dark-content"
    />
  </View>
);

export default CustomStatusBar;
