import React from 'react';
import { View, ScrollView } from 'react-native';
import type { FlexStyle } from 'react-native';
import styles from './Body.style';

type BodyProps = {
	children?: React.ReactNode;
	type?: string;
	align?: FlexStyle['justifyContent'];
	backgroundColor?: string;
	isFocus?: boolean;
	justifyContent?: FlexStyle['justifyContent'];
	scrollEnabled?: boolean;
	responder?: any;
	height?: string;
};

const renderScrollView = (
	bodyStyle: Object,
	backgroundColor?: string,
	children?: React.ReactNode,
  scrollEnabled?: boolean,
): JSX.Element => (
  <ScrollView
    keyboardShouldPersistTaps={'handled'}
    scrollEnabled={scrollEnabled || false}
    contentContainerStyle={{ ...bodyStyle, backgroundColor }}>
    {children}
  </ScrollView>
);

const renderView = (
  bodyStyle: Object,
  backgroundColor?: string,
  children?: React.ReactNode,
	responder?: any
): JSX.Element => (
  <View style={{ ...bodyStyle, backgroundColor }} {...responder}>{children}</View>
);

const Body: React.FC<BodyProps> = ({
	children,
	type,
	align,
	backgroundColor,
	isFocus,
	justifyContent,
  scrollEnabled,
	responder,
	height
}) => {
  let bodyStyle;
  if (type === 'fullscreen') {
    bodyStyle = styles().bodyFullScreen;
  } else if (type === 'withFooter') {
    bodyStyle = styles(align).bodyWithFooter;
  } else if (type === 'noPadding') {
    bodyStyle = styles().bodyNoPadding;
  } else if (type === 'scroll') {
    bodyStyle = isFocus ? styles('center').bodyScrollFocus : styles(align, justifyContent, height).bodyScroll;
  } else {
    bodyStyle = styles(align).body;
  }

  if (type === 'scroll') {
    return renderScrollView(bodyStyle, backgroundColor, children, scrollEnabled);
  } else {
    return renderView(bodyStyle, backgroundColor, children, responder);
  }
};

export default Body;
