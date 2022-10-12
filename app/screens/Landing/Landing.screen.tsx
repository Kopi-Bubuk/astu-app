import React, { useState } from 'react';
import { Image, Text, View, Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

// config
import styles from './Landing.style';
import { slider } from './Landing.config';
import color from '../../utils/Color';

// styling
import { scaleWidth, windowWidth } from '../../utils/Scale';

// components
import Container from '../../components/Container/Container.comp';
import Button from '../../components/Button/Button.comp';
import Title from '../../components/Title/Title.comp';
import Body from '../../components/Body/Body.comp';
import Footer from '../../components/Footer/Footer.comp';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar.comp';
import AppHeader from '../../components/AppHeader/AppHeader.comp';

// translation
import { useTranslation } from 'react-i18next';
import { NavigationHelpers, ParamListBase, RouteProp } from '@react-navigation/core';
import { GestureEvent } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';

type LandingProps = {
	navigation: NavigationHelpers<ParamListBase>
	route: RouteProp<any>
};

const handleNext =
  (pageIndex: number, updatePage: Function, slideAnimation: Animated.Value) => () => {
    if (pageIndex < slider.data.length - 1) {
      updatePage(pageIndex + 1);
      handleSlideAnimation(slideAnimation, 1);
    }
  };

const renderFooterContent = (
  pageIndex: number,
  updatePage: Function,
  t: Function,
  slideAnimation: Animated.Value,
) => (
  <Button
    type={'primary'}
    onPress={handleNext(pageIndex, updatePage, slideAnimation)}
    label={t('onboarding.landing.next.button')}
  />
);

const renderFooterLastPage = (
  navigation: NavigationHelpers<ParamListBase>,
  t: Function,
) => (
  <View>
    <Button
      type={'primary'}
      navigation={navigation}
      label={t('onboarding.landing.already_has_account.button')}
      to={'Loader'}
    />
    <Button
      type={'secondary'}
      navigation={navigation}
      label={t('onboarding.landing.create_new_account.button')}
      to={'Register'}
    />
  </View>
);

const renderSliderBullets = (pageIndex: number) => (
  <View style={styles().bulletWrapper}>
    {slider.data.map((page, index) => (
      <View key={index} style={styles(0, 0, index === pageIndex).bullet} />
    ))}
  </View>
);

const handleSlideAnimation = (slideAnimation: Animated.Value, index: number) =>
  Animated.timing(slideAnimation, {
    toValue: -scaleWidth(windowWidth() * index) - scaleWidth(7),
    duration: 200,
    useNativeDriver: true,
  }).start();

const handleGesture = (
	updatePage: Function, slideAnimation: Animated.Value
) => (event: GestureEvent<any>) => {
	const { nativeEvent } = event;
  if (nativeEvent.velocityX > 0) {
    updatePage(0);
		handleSlideAnimation(slideAnimation, 0);
  } else {
    handleSlideAnimation(slideAnimation, 1);
    updatePage(1);
  }
};

const renderSlider = (
  pageIndex: number,
  updatePage: Function,
  slideAnimation: Animated.Value,
  t: Function,
): JSX.Element => (
  <View style={styles().sliderWrapper}>
    <PanGestureHandler onGestureEvent={handleGesture(updatePage, slideAnimation)}>
      <Animated.View style={styles(pageIndex, slideAnimation).slider}>
        {slider.data.map((page, index) => (
          <View style={styles().content} key={index}>
            <View style={styles().iconWrapper}>
              <Image
                source={page.image}
                style={styles().icon}
              />
            </View>
            <Title text={t(page.title)} color={color.black} align={'center'} />
            <Text style={styles().desc}>{t(page.desc)}</Text>
          </View>
        ))}
      </Animated.View>
    </PanGestureHandler>
  </View>
);

const handleBackButton = (updatePage: Function, slideAnimation: Animated.Value) => () => {
  updatePage(0);
  handleSlideAnimation(slideAnimation, 0);
};

const renderBody = (
  pageIndex: number,
  navigation: NavigationHelpers<ParamListBase>,
  updatePage: Function,
  slideAnimation: Animated.Value,
  t: Function,
) => (
  <Body align={'flex-start'} type={'noPadding'} backgroundColor={'pink'}>
    <CustomStatusBar backgroundColor={'pink'}/>
    <AppHeader
      navigation={navigation}
      route={'Landing'}
      title={'ASTU'}
      onBackButtonPress={handleBackButton(updatePage, slideAnimation)}
    />
    {renderSlider(pageIndex, updatePage, slideAnimation, t)}
    {renderSliderBullets(pageIndex)}
  </Body>
);

const renderFooter = (
  pageIndex: number,
  updatePage: Function,
  navigation: NavigationHelpers<ParamListBase>,
  t: Function,
  slideAnimation: Animated.Value,
) => (
  <Footer backgroundColor={'pink'}>
    {pageIndex < slider.data.length - 1
      ? renderFooterContent(pageIndex, updatePage, t, slideAnimation)
      : renderFooterLastPage(navigation, t)}
  </Footer>
);

const Landing: React.FC<LandingProps> = ({ navigation, route }) => {
  const [pageIndex, updatePage] = useState(0);
  const [slideAnimation] = useState<Animated.Value>(new Animated.Value(0));
  const { t } = useTranslation();

  return (
    <Container backgroundColor={'pink'}>
      {renderBody(pageIndex, navigation, updatePage, slideAnimation, t)}
      {renderFooter(pageIndex, updatePage, navigation, t, slideAnimation)}
    </Container>
  );
};

export default Landing;
