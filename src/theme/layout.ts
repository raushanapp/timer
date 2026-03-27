import { ViewStyle } from 'react-native';
import { spacing } from '@/theme/spacing';
export const layout: Record<string, ViewStyle> = {
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,
  spaceBetweenColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,
  flexStart: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  } as ViewStyle,
  fill: {
    flex: 1,
  } as ViewStyle,
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } as ViewStyle,

  screen: {
    flex: 1,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.m,
  } as ViewStyle,

  card: {
    padding: spacing.m,
  } as ViewStyle,

  gapS: { gap: spacing.s } as ViewStyle,
  gapM: { gap: spacing.m } as ViewStyle,
  gapL: { gap: spacing.l } as ViewStyle,
};
