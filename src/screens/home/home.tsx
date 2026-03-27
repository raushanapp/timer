import React from 'react';
import { View, Text } from 'react-native';
import GradientBackground from '@/components/gradient-background-wrapper-component';
import useStyles from '@/hooks/theme/useStyes';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { AppNavigationProps } from '@/navigator/navigation';
const Home = ({ navigation }: AppNavigationProps<'Home'>) => {
  const { styles } = useStyles(t => {
    return {
      container: {
        ...t.layout.screen,
        ...t.layout.flexStart,
        ...t.layout.gapL,
      },
      headingText: {
        ...t.typography.h1,
        color: t.colors.text,
        fontWeight: '500',
        fontSize: 20,
      },
      buttonContainer: {
        ...t.layout.spaceBetween,
        ...t.layout.gapM,
      },
      buttonStyles: {
        ...t.layout.center,
        padding: t.spacing.m,
        borderRadius: t.borderRadii.m,
        borderWidth: 1,
        borderColor: t.colors.glassBorder,
      },
      buttonText: {
        ...t.typography.body,
        color: t.colors.text,
        fontWeight: '600',
      },
    };
  });

  const handleNavigateToScreen = (screenName: 'Focus') => {
    navigation.navigate(screenName);
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.headingText}>
          Focus subject to begin your session.
        </Text>
        <View style={styles.buttonContainer}>
          <RNBounceable
            style={styles.buttonStyles}
            onPress={() => handleNavigateToScreen('Focus')}
          >
            <Text style={styles.buttonText}>Add your focus subject</Text>
          </RNBounceable>
        </View>
      </View>
    </GradientBackground>
  );
};

export default Home;
