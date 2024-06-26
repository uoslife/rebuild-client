import {useMemo} from 'react';
import {
  MotiPressable,
  MotiPressableProps,
  MotiPressableInteractionState,
} from 'moti/interactions';

type AnimateVariant =
  | 'scale_up'
  | 'scale_up_2'
  | 'scale_up_3'
  | 'scale_down'
  | 'none';
type Props = {variant: AnimateVariant} & MotiPressableProps;

const AnimatePress = ({children, variant, ...props}: Props) => {
  const scaleUp = useMemo(
    () =>
      ({pressed}: MotiPressableInteractionState) => {
        'worklet';

        return {
          scale: pressed ? 1.2 : 1,
        };
      },
    [],
  );
  const scaleUp2 = useMemo(
    () =>
      ({pressed}: MotiPressableInteractionState) => {
        'worklet';

        return {
          scale: pressed ? 1.1 : 1,
        };
      },
    [],
  );
  const scaleUp3 = useMemo(
    () =>
      ({pressed}: MotiPressableInteractionState) => {
        'worklet';

        return {
          scale: pressed ? 1.05 : 1,
        };
      },
    [],
  );
  const scaleDown = useMemo(
    () =>
      ({pressed}: MotiPressableInteractionState) => {
        'worklet';

        return {
          scale: pressed ? 0.96 : 1,
        };
      },
    [],
  );

  // eslint-disable-next-line consistent-return
  const switchVariant = () => {
    switch (variant) {
      case 'scale_up':
        return scaleUp;
      case 'scale_up_2':
        return scaleUp2;
      case 'scale_up_3':
        return scaleUp3;
      case 'scale_down':
        return scaleDown;
      case 'none':
        return undefined;
    }
  };
  return (
    <MotiPressable {...props} animate={switchVariant()}>
      {children}
    </MotiPressable>
  );
};

export default AnimatePress;
