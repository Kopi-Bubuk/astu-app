import React from 'react';
import { View } from 'react-native';
import styles from './Footer.style';

type footerProps = {
  children?: React.ReactNode;
  backgroundColor?: string;
  type?: string;
};

export const Footer: React.FC<footerProps> = ({
  children,
  backgroundColor,
  type,
}) => (
  <View style={{ ...styles(type).footer, backgroundColor }}>{children}</View>
);

Footer.defaultProps = {
  children: null,
  backgroundColor: '',
  type: '',
};

export default Footer;
