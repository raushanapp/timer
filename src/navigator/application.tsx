import React, { JSX } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Dirs } from 'react-native-file-access';
import { CacheManager } from '@georstat/react-native-image-cache';
import { AppRoutes } from './navigation';
import Home from '@/screens/home';
import { PaperProvider } from 'react-native-paper';
import useStyles from '@/hooks/theme/useStyes';
import Focus from '@/screens/focus';
import Timer from '@/screens/timer';

CacheManager.config = {
  baseDir: `${Dirs.CacheDir}/images_cache/`,
  blurRadius: 15,
  cacheLimit: 0,
  maxRetries: 3,
  retryDelay: 3000,
  sourceAnimationDuration: 500,
  thumbnailAnimationDuration: 500,
};

const Stack = createStackNavigator<AppRoutes>();

const Screens = [{ Home }, { Focus }, { Timer }];
type Screen = keyof (typeof Screens)[0];

const ApplicationNavigator = () => {
  const { styles } = useStyles(t => ({
    root: {
      ...t.layout.fill,
      backgroundColor: t.colors.background[1],
    },
  }));
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <PaperProvider>
            <NavigationContainer theme={DarkTheme}>
              <SafeAreaView style={styles.root}>
                <StatusBar animated={true} barStyle={'light-content'} />
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS,
                    gestureEnabled: true,
                  }}
                >
                  {Screens.map(item => {
                    const [name, component] = Object.entries(item)[0] as [
                      Screen,
                      () => JSX.Element,
                    ];
                    return (
                      <Stack.Screen
                        key={name}
                        name={name}
                        component={component}
                      />
                    );
                  })}
                </Stack.Navigator>
              </SafeAreaView>
            </NavigationContainer>
          </PaperProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;
