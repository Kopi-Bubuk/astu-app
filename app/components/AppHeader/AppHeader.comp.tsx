import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './AppHeader.comp.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { CommonActions } from '@react-navigation/native';

// Utils
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';
import { testID } from '../../utils/Native';
import color from '../../utils/Color';

type HeaderProps = {
	onBackButtonPress?: any;
	navigation?: NavigationHelpers<ParamListBase>;
	route?: string;
	title: string;
	isQREnable?: boolean;
	backgroundColor?: string;
	params?: Object;
	dispatch?: Function;
};

const handleNavigate = (
	navigation?: NavigationHelpers<ParamListBase>,
	route?: string,
	params?: Object
): Function => () => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{
			name: route ? route : '',
			params
		}],
  });

	navigation && navigation.dispatch(resetAction);
};

const AppHeader: React.FC<HeaderProps> = (props) => {
  const {
    onBackButtonPress,
    navigation,
    route,
    title,
		isHasProfile,
    backgroundColor,
    params
  } = props;
	const onPressHandler = onBackButtonPress
		? onBackButtonPress
		: handleNavigate(navigation, route, params)

  return (
    <View style={styles(backgroundColor).header}>
      {route ? (
        <TouchableOpacity
          style={styles().backButton}
          onPress={onPressHandler}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            color={color.black}
            size={18}
            style={styles().back}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles().leftBar} />
      )}
      <Text style={styles().title}>{title}</Text>
      <View style={styles().rightBar} {...testID('component_appHeader_qr_button')}>
        {isHasProfile &&
					<TouchableOpacity onPress={() => navigation?.navigate('Profile')}>
						<FontAwesomeIcon icon={faUserCircle} size={30} />
					</TouchableOpacity>
				}
      </View>
    </View>
  );
};

export default AppHeader;
