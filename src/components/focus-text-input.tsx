import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import useStyles from '@/hooks/theme/useStyes';

interface FocusTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const FocusTextInput: React.FC<FocusTextInputProps> = ({
  value,
  onChangeText,
}) => {
  const { styles, theme } = useStyles(t => ({
    container: {
      ...t.layout.fill,
      justifyContent: 'center',
    },
    textInput: {
      // Set to transparent so the parent's glass effect shows
      backgroundColor: 'transparent',
      fontSize: 18,
      fontWeight: '600',
    },
  }));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="What would you like to focus on?"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={value}
        onChangeText={onChangeText}
        textColor={theme.colors.text}
        mode="flat"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        selectionColor={theme.colors.primary}
        numberOfLines={1}
      />
    </View>
  );
};

export default FocusTextInput;
