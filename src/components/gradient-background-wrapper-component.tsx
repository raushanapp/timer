import React, { ReactNode } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import useStyles from '@/hooks/theme/useStyes';
import { theme } from '@/theme/theme';

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  const { styles } = useStyles(t => ({
    gradient: {
      ...t.layout.fill,
    },
  }));

  return (
    <LinearGradient
      colors={theme.colors.background}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
