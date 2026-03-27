import React from 'react';
import ApplicationNavigator from '@/navigator/application';
import { StatusBar, Platform } from 'react-native';
import { palette } from '@/theme/theme';

const App = () => {
  React.useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content');
    }
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={palette.purpleDeep}
        translucent={false}
      />
      <ApplicationNavigator />
    </>
  );
};

export default App;
