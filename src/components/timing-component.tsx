import React from 'react';
import { View } from 'react-native';
import useStyles from '@/hooks/theme/useStyes';
import RoundedButtonComponent from './rounded-button-component';

interface TimingProps {
  onChange: (minutes: number) => void;
}

const Timing = ({ onChange }: TimingProps) => {
  const { styles } = useStyles(t => ({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 30,
    },
    buttonStyle: {
      backgroundColor: 'transparent',
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
      color: t.colors.text,
    },
  }));
  return (
    <>
      <View style={styles.container}>
        <RoundedButtonComponent
          btnTitle="10"
          size={80}
          onPress={() => onChange(10)}
          style={styles.buttonStyle}
          textStyle={styles.title}
        />
      </View>
      <View style={styles.container}>
        <RoundedButtonComponent
          btnTitle="15"
          size={80}
          onPress={() => onChange(15)}
          style={styles.buttonStyle}
          textStyle={styles.title}
        />
      </View>
      <View style={styles.container}>
        <RoundedButtonComponent
          btnTitle="20"
          size={80}
          onPress={() => onChange(20)}
          style={styles.buttonStyle}
          textStyle={styles.title}
        />
      </View>
    </>
  );
};

export default Timing;
