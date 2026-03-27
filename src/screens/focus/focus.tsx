import React from 'react';
import { View, Text } from 'react-native';
import GradientBackground from '@/components/gradient-background-wrapper-component';
import FocusTextInput from '@/components/focus-text-input';
import RoundedButtonComponent from '@/components/rounded-button-component';
import useStyles from '@/hooks/theme/useStyes';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { AppNavigationProps } from '@/navigator/navigation';

const Focus = ({ navigation }: AppNavigationProps<'Focus'>) => {
  const [subject, setSubject] = React.useState<string>('');
  const [addCurentSubject, setAddCurrentSubject] = React.useState<string[]>([]);

  const { styles } = useStyles(t => ({
    container: {
      ...t.layout.screen,
      paddingTop: t.spacing.xl,
      gap: t.spacing.l,
    },
    headerContainer: {
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
    glassInputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: t.colors.glass,
      borderRadius: t.borderRadii.xl,
      borderWidth: 1,
      borderColor: t.colors.glassBorder,
      paddingHorizontal: t.spacing.m,
      paddingVertical: t.spacing.s,
      gap: t.spacing.s,
    },
    renderText: {
      ...t.typography.body,
      color: t.colors.text,
      textAlign: 'center',
      marginTop: t.spacing.xl,
      backgroundColor: t.colors.glass,
      padding: t.spacing.m,
      borderRadius: t.borderRadii.m,
    },
    renderTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: t.spacing.s,
    },
    mappingText: {
      ...t.typography.body,
      color: t.colors.green,
      textAlign: 'center',
      fontWeight: '600',
    },
  }));

  const handlePress = () => {
    if (subject) {
      setAddCurrentSubject(prev => [...prev, subject]);
    }
    setSubject('');
    navigation.navigate('Timer', { currentSubject: subject });
  };

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
          <Text style={styles.headingText}>Focus on Time</Text>
        </View>
        <View style={styles.glassInputWrapper}>
          <FocusTextInput value={subject ?? ''} onChangeText={setSubject} />
          <RoundedButtonComponent
            btnTitle="+"
            onPress={handlePress}
            size={45}
          />
        </View>
        {addCurentSubject.length > 0 && (
          <View style={styles.renderTextContainer}>
            <Text style={styles.renderText}>Things we've focused on</Text>
            {addCurentSubject.map((item, index) => (
              <Text key={index} style={styles.mappingText}>
                {item}
              </Text>
            ))}
          </View>
        )}
      </View>
    </GradientBackground>
  );
};
export default Focus;
