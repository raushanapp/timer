import React from 'react';
import { View, Text } from 'react-native';
import GradientBackground from '@/components/gradient-background-wrapper-component';
import useStyles from '@/hooks/theme/useStyes';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { AppNavigationProps } from '@/navigator/navigation';
import CountDownComponent from '@/components/count-down-component';
import RoundedButtonComponent from '@/components/rounded-button-component';
import { ProgressBar } from 'react-native-paper';

const Timer = ({ navigation, route }: AppNavigationProps<'Timer'>) => {
  const { currentSubject } = route.params;
  const [isStarted, setIsStarted] = React.useState(false);
  const [progress, setProgress] = React.useState(1);
  const { styles } = useStyles(t => ({
    container: {
      flex: 1,
      ...t.layout.screen,
      // ...t.layout.spaceBetweenColumn,
      paddingTop: t.spacing.xl,
      gap: t.spacing.l,
    },
    headerContainer: {
      // flex: 1,
      ...t.layout.spaceBetween,
    },
    backView: {
      ...t.layout.center,
      borderRadius: t.borderRadii.l,
      paddingHorizontal: t.spacing.s,
      paddingVertical: t.spacing.xs,
      borderWidth: 1,
      borderColor: t.colors.glassBorder,
    },
    backText: {
      ...t.typography.body,
      color: t.colors.text,
      fontWeight: '600',
      textAlign: 'center',
      fontSize: 28,
      transform: [{ rotate: '180deg' }],
    },
    headingText: {
      ...t.typography.h1,
      color: t.colors.text,
      fontSize: 28,
    },
    countDownContainer: {
      // give enough space for the countdown text to render (small flex clipped it)
      minHeight: 80,
      width: '40%',
      alignSelf: 'center',
      ...t.layout.center,
      backgroundColor: t.colors.glass,
      borderRadius: t.borderRadii.l,
      paddingHorizontal: 20,
      paddingVertical: t.spacing.m,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: 'transparent',
    },
    buttonTextStyle: {
      fontSize: 24,
    },
    buttonContainer: {
      ...t.layout.center,
    },
    focusingContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
      color: t.colors.text,
    },
    task: {
      fontSize: 20,
      fontWeight: 500,
      color: t.colors.text,
    },
    progress: {
      color: t.colors.progress,
    },
    progressContainer: {
      height: 10,
      borderRadius: 3,
    },
  }));

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <RNBounceable
            style={styles.backView}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>{'→'}</Text>
          </RNBounceable>
          <Text style={styles.headingText}>Count your Time</Text>
        </View>
        {/* import count Down container */}
        <View style={styles.countDownContainer}>
          <CountDownComponent
            isPaused={!isStarted}
            onEnd={() => {}}
            onProgress={p => setProgress(p)}
            minutes={0.1}
          />
        </View>
        {/* Focusing container */}
        <View style={styles.focusingContainer}>
          <Text style={styles.title}>Focusing on :</Text>
          <Text style={styles.task}>{currentSubject}</Text>
        </View>

        {/* Progress bar */}
        <View>
          <ProgressBar
            progress={progress}
            style={styles.progressContainer}
            color={styles.progress.color}
          />
        </View>
        {/* start button */}
        <View style={styles.buttonContainer}>
          {!isStarted ? (
            <RoundedButtonComponent
              btnTitle="Start"
              size={100}
              onPress={() => setIsStarted(true)}
              style={styles.buttonStyle}
              textStyle={styles.buttonTextStyle}
            />
          ) : (
            <RoundedButtonComponent
              btnTitle="Pause"
              size={100}
              onPress={() => setIsStarted(false)}
              style={styles.buttonStyle}
              textStyle={styles.buttonTextStyle}
            />
          )}
        </View>
      </View>
    </GradientBackground>
  );
};
export default Timer;
