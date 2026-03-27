import React from 'react';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import useStyles from '@/hooks/theme/useStyes';

interface CustomButtonProps {
  btnTitle: string;
  size?: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const RoundedButtonComponent: React.FC<CustomButtonProps> = ({
  btnTitle,
  onPress,
  size = 50,
  style,
  textStyle,
}) => {
  const { styles } = useStyles(t => ({
    buttonContainer: {
      ...t.layout.center,
      borderRadius: size / 2,
      width: size,
      height: size,
      backgroundColor: t.colors.primary,
      borderWidth: 1,
      borderColor: t.colors.glassBorder,
      shadowColor: t.colors.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    text: {
      color: t.colors.text,
      fontSize: size / 2.5,
      fontWeight: 'bold',
    },
  }));

  return (
    <RNBounceable onPress={onPress} style={[styles.buttonContainer, style]}>
      <Text style={[styles.text, textStyle]}>{btnTitle}</Text>
    </RNBounceable>
  );
};

export default RoundedButtonComponent;
