import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SetStateAction } from 'react';

export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: StackNavigationProp<AppRoutes, RouteName>;
  route: RouteProp<AppRoutes, RouteName>;
}

export type AppRoutes = {
  Home: undefined;
  Focus: undefined;
  // Timer: {
  //   minutes: number;
  //   isPaused: boolean;
  //   onProgress: () => void;
  //   onEnd: () => void;
  // };
  Timer: {
    currentSubject: string;
    clearSubjects: React.Dispatch<SetStateAction<string>>;
  };
};
