import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Styling
import styles from './ToggleTag.style';

// Helpers
import { alphabetOnly } from '../../utils/Helper';
import { NavigationHelpers, ParamListBase } from '@react-navigation/core';

type ToggleTagProps = {
	index: number;
	handleSelectPhrase: Function;
	item: string;
	selectedPhrases: Array<string|null>;
	setPhrase: Function;
	setStatus: Function;
	navigation: NavigationHelpers<ParamListBase>,
	status: string|null;
	disabled: boolean
	correctKey: Array<string>;
};

type PressHandlerProps = {
	handleSelectPhrase: Function;
	item: string;
	selectedPhrases: Array<string|null>;
	setPhrase: Function;
	setStatus: Function;
	navigation: NavigationHelpers<ParamListBase>,
	isSelected: boolean,
	toggleSelected: Function,
	status: string|null;
	correctKey: Array<string>;
};

const pressHandler =
  ({
    handleSelectPhrase,
    item,
    selectedPhrases,
    setPhrase,
    setStatus,
    navigation,
    isSelected,
    toggleSelected,
    status,
		correctKey
  }: PressHandlerProps) =>
  () => {
    toggleSelected(!isSelected);
    handleSelectPhrase(
      item,
      selectedPhrases,
      setPhrase,
      setStatus,
      navigation,
      status,
			correctKey
    );
  };

const ToggleTag: React.FC<ToggleTagProps> = ({
  index,
  handleSelectPhrase,
  item,
  selectedPhrases,
  setPhrase,
  setStatus,
  navigation,
  status,
  disabled,
	correctKey
}) => {
  const [isSelected, toggleSelected] = useState(false);

  useEffect(() => {
    toggleSelected(selectedPhrases.includes(item));
  });

  return (
    <TouchableOpacity
      disabled={isSelected && disabled}
      key={item}
      style={isSelected ? styles.tagSelected : styles.tag}
      onPress={pressHandler({
        handleSelectPhrase,
        item,
        selectedPhrases,
        setPhrase,
        setStatus,
        navigation,
        isSelected,
        toggleSelected,
        status,
				correctKey
      })}>
      <Text key={`${item}_label`} style={styles.phrase}>
				{alphabetOnly(item)}
			</Text>
    </TouchableOpacity>
  );
};

export default ToggleTag;
