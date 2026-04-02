import React, { useEffect } from 'react';
import { Text } from 'react-native';
import UtilsMethods from '@/utils/index';
import useStyles from '@/hooks/theme/useStyes';

interface CountDownComponentProps {
  minutes: number;
  isPaused: boolean;
  onProgress: (progress: number) => void;
  onEnd: () => void;
}

const CountDownComponent: React.FC<CountDownComponentProps> = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}) => {
  const interval = React.useRef<number | null>(null);
  // initialize millis from minutes so the component can render a value immediately
  const [millis, setMillis] = React.useState<number | null>(null);

  const countDown = React.useCallback(() => {
    setMillis(time => {
      if (time === null) return null;
      if (time <= 0) {
        if (interval.current) clearInterval(interval.current);
        const newtime = UtilsMethods.minutesToMs(minutes);
        onEnd();
        return newtime;
      }
      return time - 1000;
    });
  }, [minutes, onEnd]);

  useEffect(() => {
    setMillis(UtilsMethods.minutesToMs(minutes));
  }, [minutes]);

  React.useEffect(() => {
    if (millis === null) return;
    onProgress(millis / UtilsMethods.minutesToMs(minutes));
  }, [millis, minutes, onProgress]);

  React.useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current!);
  }, [countDown, isPaused]);

  const safeMillis = millis ?? 0;
  const minute = Math.floor((safeMillis / 1000 / 60) % 60);
  const seconds = Math.floor((safeMillis / 1000) % 60);

  const { styles } = useStyles(t => {
    return {
      textCountDown: {
        ...t.typography.h1,
        color: t.colors.text,
        textAlign: 'center',
      },
    };
  });

  return (
    <Text style={styles.textCountDown}>
      {UtilsMethods.formateTime(minute)}:{UtilsMethods.formateTime(seconds)}
    </Text>
  );
};
export default CountDownComponent;
