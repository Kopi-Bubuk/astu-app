import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './BoxList.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';

type BoxListItemProps = {
	title: string
	desc: string
	navigation: NavigationHelpers<ParamListBase>,
	to: string
};

const handleNavigation = (navigation: NavigationHelpers<ParamListBase>, to: string) => () => {
  if (navigation) {
    navigation.navigate(to);
  }
};

const BoxList: React.FC<BoxListItemProps> = ({ title, desc, navigation, to }) => (
  <TouchableOpacity style={styles.box} onPress={handleNavigation(navigation, to)}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
    <FontAwesomeIcon icon={faChevronRight} color={'black'} size={18} />
  </TouchableOpacity>
);

export default BoxList;
