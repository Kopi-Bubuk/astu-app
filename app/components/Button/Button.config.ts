import {promises} from "dns";

export type navigationProps = {
  navigate: Function;
};

export type ButtonProps = {
  type?: string;
  inverse?: boolean;
  onPress?: Function;
  label: string;
  size?: string;
  icon?: string;
  navigation?: navigationProps;
  to?: string;
  disabled?: boolean;
	backgroundColor?: string;
	isBottomSheetButton?: boolean;
  testId?: string;
};
