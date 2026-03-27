import React from 'react';
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { theme } from '@/theme/theme';

// NamedStyles is a map of style names to valid react-native style objects.
type NamedStyles = { [key: string]: ViewStyle | TextStyle | ImageStyle };

const useStyles = <T extends NamedStyles>(factory: (t: typeof theme) => T) => {
  // memoize styles so they don't re-calculate unless factory reference changes
  const styles = React.useMemo(
    () => StyleSheet.create(factory(theme)),
    [factory],
  );

  // cast styles to T so callers get the exact keys they defined in the factory
  return { styles: styles as T, theme };
};

export default useStyles;
